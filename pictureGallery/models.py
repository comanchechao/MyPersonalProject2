from django.db import models
from django.contrib.auth.models import User


class Picture(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField()
    date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(default='default.png', blank=True)
    creater = models.ForeignKey(User, default=None, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
