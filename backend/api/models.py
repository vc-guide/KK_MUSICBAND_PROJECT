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
  
