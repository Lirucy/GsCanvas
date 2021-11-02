from operator import mod
from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from art import Art

art = Blueprint('art', __name__, url_prefix='/art')

@art.route('/')
def get_all_art():
    try:
        art_pieces = [model_to_dict(art) for art in Art.select()]
        return jsonify(art_pieces)
    except DoesNotExist:
        return jsonify(message='Error getting art pieces.'), 500

@art.route('/<int:id>', methods=['GET'])
def get_one_piece(id):
    try:
        art_piece = Art.get_by_id(id)
        return jsonify(model_to_dict(art_piece)), 200
    except DoesNotExist:
        return jsonify(message='Error getting art piece'), 500

@art.route('/<int:id>', methods=['PUT'])
def update_art(id):
    try:
        body = request.get_json()
        (Art
            .update(**body)
            .where(Art.id == id)
            .execute())
        return jsonify(model_to_dict(Art.get_by_id(id))), 200
    except DoesNotExist:
        return jsonify(message='Error updating art piece'), 500

@art.route('/', methods=['POST'])
def add_art():
    body = request.get_json()
    art_piece = Art.create(**body)
    return jsonify(model_to_dict(art_piece)), 201

@art.route('/<int:id>', methods=['DELETE'])
def delete_art(id):
    try:
        (Art
            .delete()
            .where(Art.id == id)
            .execute())
    except DoesNotExist:
        return jsonify(message='Error deleting  art piece'), 200

