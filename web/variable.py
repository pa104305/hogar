from datetime import date, datetime
import json
from math import prod
import sqlite3 as db
from flask import redirect

# Esta funcion escribe en un documento json el producto buscado para que después JS pueda buscar y cargar el mismo
def charge_product(var):
    document = open('static/json/variable.json', 'w')
    info = var,
    json.dump(info, document)
    document.close()
    # imprime el producto buscado en el servidor
    print(var)

# Esta funcion es llamada cuando se abre la ruta /"producto"/fill para iniciar las acciones indicadas
def fill(product, quantity):
    #print("fill " + product + quantity)
    #conexion a la base de datos
    route = db.connect('db/data.sqlite3')
    product_get = route.cursor()
    #buscar las columnas del nombre y stock de productos y almacenar toda la informacion de estas
    db_product = product_get.execute("SELECT product_name, product_stock FROM Products").fetchall()
    #! guarda el numero de fila probablemente sirva al modificar la base de datos
    int = 0
    #? inicia un bucle para buscar el producto necesario ademas de sumar uno a la fila para tener el lugar exacto
    for product_stock in db_product:
        int += 1
        if product == product_stock[0]:
            #print(product_stock)
            product = product_stock
            break
        else:
            print("no coincide")
    #* imprime la variable product, donde se asigno la informacion obtenida en el bucle, y el numero de intentos
    #* que se necesito para dar con esa informacion
    print(product, int, quantity)
    #! EJECUTANDO PRUEBAS EN SQL PARA SABER COMO SELECCIONAR EL STOCK CORRECTO PARA DESPUES MODIFICARLO
    db_write = 'SELECT product_name, product_stock FROM Products WHERE product_name = "{}"'.format(product[0])

# Esta funcion es llamada cuando se abre la ruta /"producto"/sell para iniciar las acciones indicadas
def sell(product):
    print("sell " + product)