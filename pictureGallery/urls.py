from django.urls import path
from . import views
from django.conf.urls import url
app_name = 'pictureGallery'
urlpatterns = [
    url(r'^gallery/$', views.pictureList, name="list"),
]
