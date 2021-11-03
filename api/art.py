from peewee import *

from db import DATABASE

class Art(Model):
    title = CharField()
    url = CharField()

    class Meta:
        database = DATABASE