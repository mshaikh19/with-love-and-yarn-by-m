from flask import Blueprint, request, jsonify
from controllers.TutorialController import createTutorial, getAllTutorials

tutorial_bp = Blueprint('tutorial_bp', __name__)

@tutorial_bp.route('/tutorials', methods=['POST'])
def addTutorial():
    return jsonify(createTutorial(request.json))


@tutorial_bp.route('/tutorials', methods=['GET'])
def fetchTutorials():
    return jsonify(getAllTutorials())