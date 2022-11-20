import json

def product(var):
    document = open('static/json/variable.json', 'w')
    info = var,
    json.dump(info, document)
    document.close()
    print(var)