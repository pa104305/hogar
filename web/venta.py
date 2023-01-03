import sqlite3 as db
import json

def data_stock():
    # conexion con la base de datos
    route = db.connect('db/data.sqlite3')
    try:
        #obtener la lista de productos de la base de datos
        stocks = route.execute("SELECT * FROM Products").fetchall()
        info_json = []
        for product in stocks:
            stock = {
                "id" : product[0],
                "name" : product[1],
                "stock" : product[2],
                "price" : product[3]
            }
            info_json.append(stock)
        with open('static/json/stock.json', 'w') as stock_file:
            json.dump(info_json, stock_file, indent=4)
        #print(info_json)
        #selecciona un archivo json donde se guardara la informacion
        #document = open('static/json/stock.json', 'w')
        #escribir la información en el archivo json
        #json.dump(stocks, document, indent=4)
        #termina la escritura del documento
        #document.close()
    #se ejecuta en caso de un error relacionado con la base de datos
    except db.OperationalError:
        print("ptm un error")
    #el programa se ejecuto correctamente
    finally:
        print("Programa finalizado")

def create_product(name_new_product):
    route = db.connect('db/data.sqlite3')
    id = len(route.execute("SELECT product_id FROM Products").fetchall()) + 1
    route.execute("INSERT INTO Products VALUES ({}, '{}', 0, '$0')".format(id, name_new_product))
    route.commit()
    route.close()
