# Generated by Django 2.1.4 on 2018-12-13 20:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20181213_2021'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reservation',
            old_name='time_of_visit',
            new_name='time',
        ),
    ]
