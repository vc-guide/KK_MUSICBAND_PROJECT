from django.db import models

# Create your models here.

class Homepage(models.Model):
  slug = models.CharField(max_length=100)
  homeimg = models.ImageField(upload_to = 'home_images')
  
  def __str__(self):
    return self.slug
  
class HomepageDescription(models.Model):
  slug = models.CharField(max_length=120)
  Description = models.TextField()
  def __str__(self):
    return self.slug
  
class Events(models.Model):
  event = models.CharField(max_length=250)
  event_image = models.ImageField(upload_to = 'event_images')
  committee = models.CharField(max_length= 250)
  date = models.DateField()
  place = models.CharField(max_length = 200)
  description = models.TextField()
  status = models.BooleanField(default=False, help_text="0=default, 1=Hidden")
  
  def __str__(self):
    return self.event
  
class EventGallery(models.Model):
  event_name = models.ForeignKey(Events, on_delete=models.CASCADE, related_name='media')
  image = models.ImageField(upload_to='event_media/images/',blank=True)
  video = models.FileField(upload_to='event_media/videos/',blank=True)
  
  def __str__(self):
    return f"Media for {self.event_name.event}"
  
  
  
