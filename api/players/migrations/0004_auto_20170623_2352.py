# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-06-23 23:52
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0003_auto_20170623_2329'),
    ]

    operations = [
        migrations.RenameField(
            model_name='player',
            old_name='skill_bracket',
            new_name='deprecated_skill_bracket',
        ),
    ]