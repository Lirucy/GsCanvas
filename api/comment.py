from peewee import *

from db import DATABASE
from art import Art
from user import User

class Comment(Model):
    comment = CharField()
    user = ForeignKeyField(User, backref='comments')
    art_id = ForeignKeyField(Art, backref='comments')

    class Meta:
        database = DATABASE