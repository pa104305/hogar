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
    url_for('static', filename='img/croquis.png')
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

@app.route('/store/<product_name>/changeprice/<new_price>')
def price(product_name, new_price):
    change_price(product_name, new_price)
    time.sleep(3)
    return redirect('/store/' + product_name)

@app.route('/store/new/<new_product>')
def create(new_product):
    create_product(new_product)
    time.sleep(3)
    return redirect('/store/' + new_product)

@app.route('/users')
def users():
    # ! Cambiar la redireccion a la pagina para los usuarios al diseñar esta pagina
    data_db()
    return render_template('html/usuarios.html')

@app.route('/users/createuser/<user_name>/<password>')
def create_user(user_name, password):
    create_user_db(user_name, password)
    time.sleep(3)
    return redirect('/users')

@app.route('/users/modify/username/<change_user>/<id>')
def modify_username(change_user, id):
    modify_username_db(change_user, id)
    # ! Funcion para modificar el nombre de usuario correspondiente
    time.sleep(3)
    return redirect('/users')

@app.route('/users/modify/password/<change_password>/<id>')
def modify_password(change_password, id):
    modify_password_db(change_password, id)
    # ! Funcion para cambiar la contraseña del usuario
    time.sleep(3)
    return redirect('/users')

if __name__ == '__main__':
    app.run('0.0.0.0', debug=True, port=8080)
