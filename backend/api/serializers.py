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


class EventGallerySerializer(serializers.ModelSerializer):
  class Meta:
    model = EventGallery
    fields = '__all__'
        
class EventsSerializer(serializers.ModelSerializer):
  media = EventGallerySerializer(many = True, read_only = True)
  class Meta:
    model = Events
    fields = '__all__'
    
