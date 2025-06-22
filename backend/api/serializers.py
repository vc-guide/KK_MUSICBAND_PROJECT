from rest_framework import serializers
from .models import *

class HomepageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Homepage
    fields = '__all__'