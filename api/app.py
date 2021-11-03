from flask import Flask, g 
from flask_cors import CORS
from flask_login import LoginManager
from peewee import DoesNotExist

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

app.secret_key = 'randomsuperdupersecretkey'

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

CORS(art, origins=['http://localhost:3000'], supports_credentials=True)
CORS(comment, origins=['http://localhost:3000'], supports_credentials=True)
CORS(user, origins=['http://localhost:3000'], supports_credentials=True)

app.register_blueprint(art)
app.register_blueprint(comment)
app.register_blueprint(user)

if __name__ == '__main__':
    print('app.py is running!')
    initialize([Art, Comment, User])
    app.run(debug=DEBUG, port=PORT)
