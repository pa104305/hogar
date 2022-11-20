import sqlite3 as db
import json

def data_stock():
    route = db.connect('db/data.sqlite3')
    try:
        get_stock = route.cursor()
        stock = get_stock.execute("SELECT * FROM Products").fetchall()
        #print(stock)
        document = open('static/json/stock.json', 'w')
        print(len(stock))
        json.dump(stock, document)
        #for line in stock:
            #products = {"id": line[0], "product": line[1], "stock": line[2], "price": line[3]}
            #json.dump(line, document)
        document.close()
    except db.OperationalError:
        print("ptm un error")
    finally:
        print("Programa finalizado")

data_stock()