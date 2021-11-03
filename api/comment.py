from peewee import *
import datetime

from db import DATABASE
from art import Art
from user import User

class Comment(Model):
    comment = CharField()
    user = ForeignKeyField(User, backref='comments')
    art_id = ForeignKeyField(Art, backref='comments')
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE