from django.db import models


# Create your models here.
class Clinic(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    Hours_of_Operations = models.CharField(max_length=100)
    Average_wait_time = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class User(models.Model):
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    date_of_birth = models.DateField
    email = models.EmailField

    def __str__(self):
        return self.first_name


class Reservation(models.Model):
    reason_for_visit = models.CharField(max_length=150)
    date_of_visit = models.DateTimeField
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='users')
    clinic = models.ForeignKey('Clinic', on_delete=models.CASCADE, related_name='clinics')

    def __str__(self):
        return self.date_of_vist
