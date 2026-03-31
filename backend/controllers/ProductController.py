from models.productsModel import Product
from extensions import db

def createProduct(data):
    product = Product(
        name=data.get('name'),
        description=data.get('description'),
        price=data.get('price'),
        image_url=data.get('image_url')
    )

    db.session.add(product)
    db.session.commit()

    return {"message": "Product created successfully"}


def getAllProducts():
    products = Product.query.all()

    result = []
    for p in products:
        result.append({
            "id": p.id,
            "name": p.name,
            "description": p.description,
            "price": p.price,
            "image_url": p.image_url
        })

    return result

def updateProduct(product_id, data):
    product = Product.query.get(product_id)

    if not product:
        return {"error": "Product not found"}

    product.name = data.get('name')
    product.description = data.get('description')
    product.price = data.get('price')
    product.image_url = data.get('image_url')

    db.session.commit()

    return {"message": "Product updated"}


def deleteProduct(product_id):
    product = Product.query.get(product_id)

    if not product:
        return {"error": "Product not found"}

    db.session.delete(product)
    db.session.commit()

    return {"message": "Product deleted"}

