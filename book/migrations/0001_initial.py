# Generated by Django 2.0 on 2018-02-07 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='English',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('english_text', models.TextField()),
                ('russian_text', models.TextField()),
            ],
        ),
    ]
