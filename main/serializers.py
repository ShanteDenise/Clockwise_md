from rest_framework import serializers
from .models import Clinic, User, Reservation


class ClinicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clinic
        fields = ('id', 'name', 'address', 'Hours_of_Operations', 'Average_wait_time')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'date_of_birth', 'email')


class ReservationSerializer(serializers.ModelSerializer):
    clinics = ClinicSerializer(many=True, read_only=True)
    users = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Reservation
        fields = ('id', 'reason_for_visit', 'date_of_visit', 'clinics', 'users')
