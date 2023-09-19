

from django.urls import path
from .views import RegisterAPIView, UserAPIView, RefreshAPIView, LoginAPIView, LogoutAPIView,TrainData,Items

urlpatterns = [
    path('register/', RegisterAPIView.as_view()),
    path('login/', LoginAPIView.as_view()),
    path('user/', UserAPIView.as_view()),
    path('refresh/', RefreshAPIView.as_view()),
    path('logout/', LogoutAPIView.as_view()),
    path('train/<str:item>/',TrainData),
    path('items/',Items)
]