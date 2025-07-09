from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .serializers import *
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

def home(request):
  return HttpResponse("This is KKband ")

class BandList(APIView):
  def get(self,request):
    queryset = Homepage.objects.all()
    queryset2 = HomepageDescription.objects.all()
    background = HomepageSerializer(queryset, many=True).data
    description = HomepageDescriptionSerializer(queryset2, many=True).data
    return Response({
      "background":background, "description" : description
    })
    
class EventsList(APIView):
  def get(self,request):
    eventset = Events.objects.filter(status = 0)
    eventlists = EventsSerializer(eventset, many= True).data
    return Response({
      "eventslists": eventlists
    })
    
@api_view(['POST'])
def create_booking(request):
  serializer = EventBookingSerializer(data = request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)