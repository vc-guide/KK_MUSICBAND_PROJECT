from django.urls import path
from .views import *


urlpatterns = [
  path('queryset/',home),
  path("", BandList.as_view()),
  path("events/", EventsList.as_view()),
  path("bookings/",EventBookingCreateView.as_view()),
  path("cinemamelody/",CinemaMelodyList.as_view()),
]