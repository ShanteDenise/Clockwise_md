
from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('clinics', views.ClinicViewView)
router.register('users', views.UserViewView)
router.register('reservations', views.ResevationView)


urlpatterns = [
    path('', include(router.urls))
]