from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .serializers import HomepageSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

def home(request):
  return HttpResponse("This is KKband ")

class BandList(APIView):
  def get(self,request):
    queryset = Homepage.objects.all()
    serializer = HomepageSerializer(queryset, many=True)
    return Response(serializer.data)