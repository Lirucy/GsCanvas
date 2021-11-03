from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from user import User
from art import art
from comment import Comment

comment = Blueprint('comments', __name__, url_prefix='/api/comments')

@comment.route('/', methods=['GET'])
def get_all_comments():
    try:
        comments = [model_to_dict(comment) for comment in Comment.select()]
        return jsonify(comments), 200
    except DoesNotExist:
        return jsonify(error='Error getting comments'), 500

@comment.route('/<int:id>', methods=['GET'])
def get_one_comment(id):
    try:
        comment = Comment.get_by_id(id)
        return jsonify(model_to_dict(comment)), 200
    except DoesNotExist:
        return jsonify(error='Error getting comment'), 500


@comment.route('/<int:id>', methods=['PUT'])
@login_required
def update_comment(id):
    try:
        body = request.get_json()
        if (Comment.user != current_user.id):
            return jsonify(message='Unauthorized!'), 401
        (Comment
            .update(**body)
            .where(Comment.id = id)
            .execute())
        return jsonify(model_to_dict(Comment.get_by_id(id))), 200
    except DoesNotExist:
        return jsonify(error='Error updating comment')

@comment.route('/<int:id>', methods=['POST'])
@login_required
def new_comment(id):
    body = request.get_json()
    comment = Comment.create(**body, art_id=id)
    comment_dict = model_to_dict(comment)
    return jsonify(comment_dict), 201

@comment.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    if (Comment.user != current_user.id)
        return jsonify(error='Unauthorized!')
    (Comment
        .delete()
        .where(Comment.id == id)
        .execute())
    return jsonify(message = 'Comment successfully deleted'), 200