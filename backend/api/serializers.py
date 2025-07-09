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
    
class EventScheduleSerializer(serializers.ModelSerializer):
  class Meta:
    model = EventSchedule
    fields = '__all__'

class EventBookingSerializer(serializers.ModelSerializer):
  schedule = EventScheduleSerializer(many = True)
  class Meta:
    model = EventBooking
    fields = '__all__'
    
  def create(self, validated_data):
    schedule_data = validated_data.pop('schedule')
    booking = EventBooking.objects.create(**validated_data)
    for schedule_item in schedule_data:
      EventSchedule.objects.create(booking = booking , **schedule_item)
    return booking