from flask import Flask, g 
from flask_cors import CORS
from flask_login import LoginManager
from peewee import DoesNotExist
import os

from db import DATABASE, initialize
from art import Art
from comment import Comment
from user import User

from resources.art import art 
from resources.comments import comment
from resources.users import user 

DEBUG = True
PORT = 8000

login_manager = LoginManager()

app = Flask(__name__)

app.secret_key = os.environ.get('SECRET') or 'randomsuperdupersecretkey'

login_manager.init_app(app)

@login_manager.user_loader
def load_user(userid):
    try:
        return User.get(User.id == userid)
    except DoesNotExist:
        return None

@app.before_request
def before_request():
    g.db = DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    g.db.close()
    return response 

@app.route('/')
def index():
    return "The G's Canvas Root Route!", 200

app.register_blueprint(art)
app.register_blueprint(comment)
app.register_blueprint(user)

origins=['http://localhost:3000']

if 'DATABASE_URL' in os.environ:
    initialize([Art, Comment, User])
    app.config['SESSION_COOKIE_SECURE'] = True
    app.config['SESSION_COOKIE_HTTPONLY'] = False
    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    origins.append(os.environ.get('CLIENT_URL'))

CORS(app, origins=origins, supports_credentials=True)
# CORS(comment, origins=['http://localhost:3000'], supports_credentials=True)
# CORS(user, origins=['http://localhost:3000'], supports_credentials=True)

if __name__ == '__main__':
    print('app.py is running!')
    initialize([Art, Comment, User])
    app.run(debug=DEBUG, port=PORT)
