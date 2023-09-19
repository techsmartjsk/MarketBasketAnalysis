from .models import UserModel,MarketBasket
from .serializer import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse
import json
from rest_framework.authentication import get_authorization_header
from rest_framework.response import Response
from rest_framework.exceptions import APIException, AuthenticationFailed
from .authentication import create_access_token, create_refresh_token, decode_access_token, decode_refresh_token
import pandas as pd
from pathlib import Path
import os
from mlxtend.preprocessing import TransactionEncoder
from mlxtend.frequent_patterns import apriori
from mlxtend.frequent_patterns import association_rules

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

class RegisterAPIView(APIView):
    def post(self, request):
        data=request.data
        data['username'] = data['email']
        serializer = UserSerializer(data=data)
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginAPIView(APIView):
    def post(self, request):
        user = UserModel.objects.filter(email=request.data['email']).first()

        if not user:
            raise APIException('Invalid credentials!')

        if not user.check_password(request.data['password']):
            raise APIException('Invalid credentials!')

        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)

        response = Response()

        response.set_cookie(key='refreshToken', value=refresh_token, httponly=True)
        response.data = {
            'token': access_token
        }
        print(user.is_authenticated)
        return response


def TrainData(request,item):
    location = os.path.dirname(__file__)
    print(location)
    file_location = location + '/files/MarketBasket.csv'
    basket = pd.read_csv(file_location)
    print(basket.head())
    print(basket['itemDescription'])
    basket['itemDescription'] = basket['itemDescription'].transform(lambda x: [x])
    basket = basket.groupby(['Member_number','Date']).sum()['itemDescription'].reset_index(drop=True)
    print(basket)

    encoder = TransactionEncoder()
    transactions = pd.DataFrame(encoder.fit(basket).transform(basket), columns=encoder.columns_)

    frequent_itemsets = apriori(transactions, min_support= 6/len(basket), use_colnames=True, max_len = 2)
    rules = association_rules(frequent_itemsets, metric="lift",  min_threshold = 1.5)

    item_rules = rules[rules['consequents'].astype(str).str.contains(item)]
    item_rules = item_rules.sort_values(by=['lift'],ascending = [False]).reset_index(drop = True)

    print(item_rules['antecedents'])
    response = {"items":[]}
    res = [list(x) for x in item_rules['antecedents']]
    for r in res:
        response['items'].append(r[0])
    return HttpResponse(json.dumps(response))

def Items(request):
    res = {"items":[]}
    response = MarketBasket.objects.order_by().values('itemDescription').distinct()[:30]
    list_result = [entry['itemDescription'] for entry in response]
    for l in list_result:
        res["items"].append(l)
    return HttpResponse(json.dumps(res))

class UserAPIView(APIView):
    def get(self, request):
        auth = get_authorization_header(request).split()

        if auth and len(auth) == 2:
            token = auth[1].decode('utf-8')
            id = decode_access_token(token)

            user = UserModel.objects.filter(pk=id).first()
            print(user.is_authenticated)

            return Response(UserSerializer(user).data)

        raise AuthenticationFailed('unauthorised')


class RefreshAPIView(APIView):
    def post(self, request):
        refresh_token = request.COOKIES.get('refreshToken')
        id = decode_refresh_token(refresh_token)
        access_token = create_access_token(id)
        return Response({
            'token': access_token
        })


class LogoutAPIView(APIView):
    def post(self, _):
        response = Response()
        response.delete_cookie(key="refreshToken")
        response.data = {
            'message': 'success'
        }
        return response