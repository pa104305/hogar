#from crypt import methods
from fileinput import filename
from itertools import product
from flask import Flask, jsonify, render_template, url_for
from venta import *
from info import *
from variable import *
import time

app = Flask(__name__)
@app.route('/')
def saludo(name=None):
    data_db()
    url_for('static', filename='style.css')
    url_for('static', filename='app.js')
    return render_template('index.html')

@app.route('/principal')
def inicio():
    url_for('static', filename='css/home.css')
    return render_template('html/home.html')

@app.route('/compras')
def compras():
    data_stock()
    url_for('static', filename='js/lista.js')
    url_for('static', filename='css/lista.css')
    return render_template('html/lista.html')

@app.route('/venta')
def venta():
    data_stock()
    url_for('static', filename='css/productos.css')
    url_for('static', filename='js/ventas.js')
    return render_template('html/productos.html')

@app.route('/store/<product_name>')
def variable(product_name):
    data_stock()
    charge_product(product_name)
    url_for('static', filename='css/variable.css')
    return render_template('html/variable.html')

@app.route('/store/<product_name>/fill/<filled>')
def fill_route(product_name, filled):
    fill(product_name, filled)
    time.sleep(3)
    return redirect('/store/' + product_name)

@app.route('/store/<product_name>/sell/<selled>')
def sell_route(product_name, selled):
    sell(product_name, selled)
    time.sleep(3)
    return redirect('/store/' + product_name)

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True, port=8080)
