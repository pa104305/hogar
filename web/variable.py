from datetime import date, datetime
import json
from math import prod
import sqlite3 as db
from flask import redirect
from datetime import datetime

# Esta funcion escribe en un documento json el producto buscado para que después JS pueda buscar y cargar el mismo
def charge_product(var):
    print(datetime.now())
    print(var)
    prod = {
        "search" : var
    }
    with open('static/json/variable.json', 'w') as write_file:
        json.dump(prod, write_file, indent=4)
    #document = open('static/json/variable.json', 'w')
    #json.dump(var, document)
    #document.close()

# Esta funcion es llamada cuando se abre la ruta /"producto"/fill/"cantidad" para iniciar las acciones indicadas
def fill(product, quantity):
    #print("fill " + product + quantity)
    #conexion a la base de datos
    route = db.connect('db/data.sqlite3')
    #seleccionar el stock existente del producto
    stock = route.execute("SELECT product_stock FROM Products WHERE product_name='{}'".format(product)).fetchall()[0][0]
    #operacion para calcular el stock segun la opcion seleccionada
    quantity = stock + int(quantity)
    #ejecuta el cambio correspondiente de stock en la db 
    route.execute("UPDATE Products SET product_stock={} WHERE product_name='{}';".format(quantity, product))
    #actualizar la db
    route.commit()
    #cerrar conexion con la base de datos
    route.close()


# Esta funcion es llamada cuando se abre la ruta /"producto"/sell/"cantidad" para iniciar las acciones indicadas
def sell(product, quantity):
    print("sell " + product)
    #conexion a la base de datos
    route = db.connect('db/data.sqlite3')
    #seleccionar el stock existente
    stock = route.execute("SELECT product_stock FROM Products WHERE product_name='{}'".format(product)).fetchall()[0][0]
    #operacion para calcular el stock segun la opcion pulsada
    quantity = stock - int(quantity)
    #ejecutar cambio correspondiente de stock en la db
    route.execute("UPDATE Products SET product_stock={} WHERE product_name='{}';".format(quantity, product))
    #actualizat la db
    route.commit()
    #cerrar conexion con la base de datos
    route.close()