# Generated by Django 2.1.4 on 2018-12-13 21:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_remove_reservation_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='date_of_visit',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='user',
            name='date_of_birth',
            field=models.DateTimeField(),
        ),
    ]