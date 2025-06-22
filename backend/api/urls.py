from django.urls import path
from .views import *

urlpatterns = [
  path('queryset/',home),
  path("", BandList.as_view())
]