# Generated by Django 2.1.4 on 2018-12-14 21:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_auto_20181213_2156'),
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
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(max_length=150),
        ),
    ]