from django.contrib import admin
from .models import Clinic, User, Reservation

# Register your models here.
admin.site.register([Clinic, User, Reservation])