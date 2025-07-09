from django.urls import path
from .views import *


urlpatterns = [
  path('queryset/',home),
  path("", BandList.as_view()),
  path("events/", EventsList.as_view()),
  path("bookings/",create_booking ,name='create_booking')
]