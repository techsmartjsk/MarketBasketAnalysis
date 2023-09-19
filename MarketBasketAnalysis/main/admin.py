from django.contrib import admin
from .models import MarketBasket,UserModel
from import_export.admin import ImportExportModelAdmin
from django.contrib.auth.models import Group

class MarketBasketAdmin(ImportExportModelAdmin,admin.ModelAdmin):
    pass

admin.site.register(MarketBasket,MarketBasketAdmin)
admin.site.register(UserModel)
admin.site.unregister(Group)
admin.site.site_header = 'Market Basket Analysis'