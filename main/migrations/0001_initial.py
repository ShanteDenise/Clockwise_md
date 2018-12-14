# Generated by Django 2.1.4 on 2018-12-13 22:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Clinic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('address', models.CharField(max_length=200)),
                ('Hours_of_Operations', models.CharField(max_length=100)),
                ('Average_wait_time', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reason_for_visit', models.CharField(max_length=150)),
                ('date_of_visit', models.DateTimeField()),
                ('clinic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='clinics', to='main.Clinic')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=150)),
                ('last_name', models.CharField(max_length=150)),
                ('date_of_birth', models.DateField()),
                ('email', models.CharField(max_length=150)),
            ],
        ),
        migrations.AddField(
            model_name='reservation',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='users', to='main.User'),
        ),
    ]
