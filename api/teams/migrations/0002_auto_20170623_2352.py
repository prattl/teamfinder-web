# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-06-23 23:52
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='team',
            old_name='skill_bracket',
            new_name='deprecated_skill_bracket',
        ),
    ]
