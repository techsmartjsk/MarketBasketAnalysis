from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser


class UserModel(AbstractUser):
    email = models.EmailField(unique=True, max_length = 500)
    firstname = models.TextField(max_length = 100)
    lastname = models.TextField(max_length = 100)
    password = models.CharField(max_length = 254)
    
    def __str__(self):
        return self.email

class MarketBasket(models.Model):
    Member_number = models.CharField(max_length=50,default='')
    Date = models.CharField(max_length=50,default='')
    itemDescription = models.CharField(max_length=50,default='')

    def __str__(self):
        return self.Member_number