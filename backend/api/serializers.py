from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

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
    fields = ['date','start_time','end_time']

class EventBookingSerializer(serializers.ModelSerializer):
  schedule = EventScheduleSerializer(many = True)
  class Meta:
    model = EventBooking
    fields = ['name', 'phone','email','address','event_name','committee_name','venue','schedule']
    
  def create(self, validated_data):
    schedule_data = validated_data.pop('schedule')
    booking = EventBooking.objects.create(**validated_data)
    for schedule_item in schedule_data:
      EventSchedule.objects.create(booking = booking , **schedule_item)
    return booking
  
class CinemaMelodyImagesSerilizer(serializers.ModelSerializer):
  class Meta:
    model = CinemaMelodyImages
    fields = ['cinema_malody_image']
    
class CinemaMelodyVideosSerilizer(serializers.ModelSerializer):
  class Meta:
    model = CinemaMelodyVideos
    fields = ['cinema_malody_video']
    
class CinemaMelodySerializer(serializers.ModelSerializer):
  melody_images = CinemaMelodyImagesSerilizer(many = True, read_only= True)
  melody_videos = CinemaMelodyVideosSerilizer(many = True, read_only= True)
  class Meta:
    model = CinemaMelody
    fields = '__all__'
    
class RegisterSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only = True, min_length=8, style={'input_type':'password'})
  class Meta:
    model = User
    fields = ['username', 'email', 'password']
  
  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    
    return user