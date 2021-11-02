from flask import Flask, g 
from flask_cors import CORS
from flask_login import LoginManager

from db import DATABASE, initialize
from art import Art
from comment import Comment
from user import User