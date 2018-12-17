from rest_framework import serializers
from .models import Clinic, User, Reservation


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ('id', 'reason_for_visit', 'date_of_visit', 'clinic', 'user')


class ClinicSerializer(serializers.ModelSerializer):
    reservation = ReservationSerializer(many=True, read_only=True)

    class Meta:
        model = Clinic
        fields = ('id', 'name', 'address', 'Hours_of_Operations', 'Average_wait_time', 'reservation')


class UserSerializer(serializers.ModelSerializer):
    reservation = ReservationSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'date_of_birth', 'email', 'reservation')
