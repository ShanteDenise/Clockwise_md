from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import ClinicSerializer, ReservationSerializer, UserSerializer
from .models import User, Clinic, Reservation


class ClinicView(viewsets.ModelViewSet):
    queryset = Clinic.objects.all()
    serializer_class = ClinicSerializer

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ReservationView(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer