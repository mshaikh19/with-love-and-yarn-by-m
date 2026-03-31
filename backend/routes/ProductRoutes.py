from flask import Blueprint, request, jsonify
from controllers.ProductController import createProduct, getAllProducts, updateProduct, deleteProduct

product_bp = Blueprint('product_bp', __name__)

@product_bp.route('/products', methods=['POST'])
def addProduct():
    data = request.json
    result = createProduct(data)
    return jsonify(result)


@product_bp.route('/products', methods=['GET'])
def fetchProducts():
    products = getAllProducts()
    return jsonify(products)

@product_bp.route('/products/<int:id>', methods=['PUT'])
def updateProduct(id):
    data = request.json
    result = updateProduct(id, data)
    return jsonify(result)


@product_bp.route('/products/<int:id>', methods=['DELETE'])
def deleteProduct(id):
    result = deleteProduct(id)
    return jsonify(result)