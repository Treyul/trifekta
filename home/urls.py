from django.urls import path
from .views import home,portfolio

urlpatterns = [
    path("/",home),
    path("/portfolio",portfolio)
]