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
  

class EventBooking(models.Model):
  name = models.CharField(max_length = 150)
  phone = models.CharField(max_length=15)
  email = models.EmailField()
  address = models.TextField()
  event_name = models.CharField(max_length=250)
  committee_name = models.CharField(max_length=250)  
  venue = models.CharField(max_length=150)
  
  def __str__(self):
    return f"{self.event_name} booked by {self.name}"
  
class EventSchedule(models.Model):
  booking = models.ForeignKey(EventBooking, related_name="schedule", on_delete=models.CASCADE)
  date = models.DateField()
  start_time = models.TimeField()
  end_time = models.TimeField()
  
  def __str__(self):
    return f"{self.date} : {self.start_time} to {self.end_time}"
  
class CinemaMelody(models.Model):
  slug = models.CharField(max_length=100)
  slider_img1 = models.ImageField(upload_to='cinemaMelody/slider/', blank=True)
  slider_img2 = models.ImageField(upload_to='cinemaMelody/slider/', blank=True)
  slider_img3 = models.ImageField(upload_to='cinemaMelody/slider/', blank=True)
  slider_img4 = models.ImageField(upload_to='cinemaMelody/slider/', blank=True)
  slider_img5 = models.ImageField(upload_to='cinemaMelody/slider/', blank=True)
  slider_title1 = models.CharField(max_length=250)
  slider_title2 = models.CharField(max_length=300)
  vedio_description1 = models.TextField()
  vedio_description2 = models.TextField()
  vedio_description3 = models.TextField()
  vedio_description4 = models.TextField()
  vedio_description5 = models.TextField()
  semi_description = models.TextField()
  main_video = models.FileField(upload_to='cinemaMelody/mainvideo/', blank=True)
  
  def __str__(self):
    return f"{self.slug}"
  
class CinemaMelodyImages(models.Model):
  cinema_melody = models.ForeignKey(CinemaMelody, related_name='melody_images', on_delete = models.CASCADE)
  cinema_malody_image = models.ImageField(upload_to='cinemaMelody/images/',blank=True)
  
  def __str__(self):
    return f"Images for {self.cinema_melody}"
  
class CinemaMelodyVideos(models.Model):
  cinema_melody = models.ForeignKey(CinemaMelody, related_name='melody_videos', on_delete = models.CASCADE)
  cinema_malody_video = models.FileField(upload_to='cinemaMelody/videos/',blank=True)
  
  def __str__(self):
    return f"Videos for {self.cinema_melody}"
  
    
