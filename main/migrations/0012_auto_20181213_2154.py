# Generated by Django 2.1.4 on 2018-12-13 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_auto_20181213_2152'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='date_of_visit',
            field=models.CharField(max_length=150),
        ),
    ]
