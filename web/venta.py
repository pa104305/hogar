import sqlite3 as db
import json

def data_stock():
    # conexion con la base de datos
    route = db.connect('db/data.sqlite3')
    try:
        get_stock = route.cursor()
        #obtener la lista de productos de la base de datos
        stock = get_stock.execute("SELECT * FROM Products").fetchall()
        #selecciona un archivo json donde se guardara la informacion
        document = open('static/json/stock.json', 'w')
        #escribir la información en el archivo json
        json.dump(stock, document)
        #termina la escritura del documento
        document.close()
    #se ejecuta en caso de un error relacionado con la base de datos
    except db.OperationalError:
        print("ptm un error")
    #el programa se ejecuto correctamente
    finally:
        print("Programa finalizado")

#data_stock()