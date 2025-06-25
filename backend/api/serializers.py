from rest_framework import serializers
from .models import *

class HomepageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Homepage
    fields = '__all__'
    
class HomepageDescriptionSerializer(serializers.ModelSerializer):
  class Meta:
    model = HomepageDescription
    fields = '__all__'