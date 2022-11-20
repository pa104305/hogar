import sqlite3 as db
# *Importamos la libreria para conectar con sqlite3 como db
import json
# *Importar la libreria para leer y escribir json
from statistics import mode
# conectar con la base de datos mediante la ruta

def data_db():
    route = db.connect('db/data.sqlite3')
    try:
        # ?para que funciona .cursor()
        user_get = route.cursor()
        # *Seleccionar todo la informacion de la base de datos desde la tabla Users
        user = user_get.execute("SELECT * FROM Users").fetchall()
        #print(user)
        # *Abrir el archivo json en el que se escribira la informacion
        document = open('static/json/user.json', 'w')
        # *Escribir los datos obtenidos desde la db para posteriormente usarlos en el front-end
        json.dump(user, document)
        # *Cerrar el documento para que se escriba la información
        document.close()
        print("Datos obtenidos")
    # !Lanzar una frase en caso de que haya un error de operacion con la base de datos
    except db.OperationalError:
        print("ptm otro error")

