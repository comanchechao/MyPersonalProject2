from django.http import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from .models import Picture
# Create your views here.
def pictureList(request):
    pictures = Picture.objects.all().order_by('date');
    context = {
        'pictures' : pictures,
    }
    return render(request, 'pictureGallery/pictureList.html', context = context)
