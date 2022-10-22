from crypt import methods
from itertools import product
from flask import Flask, jsonify, render_template
#from info import products

app = Flask(__name__)
@app.route('/')
def saludo(name=None):
    return render_template('frontend/index.html')

#@app.route('/stock')
#def getStock():
#    return jsonify(products)

#@app.route('/stock/<string:product_name>')
#def getOnlyOneStock(product_name):
    #product = product_name
    #return product
    #getProductStock = [products for stock in products if product['name'] == product]
    #print(getProductStock)
    #return jsonify(found[0])
    #stockFound = [products[0] for product in products if product["name"] == product_name]

if __name__ == '__main__':
    app.run(debug=True, port=3300)