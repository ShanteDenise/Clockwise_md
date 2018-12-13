
from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('clinics', views.ClinicView)
router.register('users', views.UserView)
router.register('reservations', views.ReservationView)


urlpatterns = [
    path('', include(router.urls))
]