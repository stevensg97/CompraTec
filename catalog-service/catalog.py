from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client['catalog-service-database']
elements = db.catalog

def catalogServiceInsert(Name, Price, Quantity):
    element = {
        'Name': Name,
        'Price': Price,
        'Quantity': Quantity
    }
    elements.insert_one(element)
    print("Done!")
    return 0

#catalogServiceInsert("Silla", 10000, 10)

def catalogServiceSearch(Name):
    search = elements.find_one({
        'Name' : Name
    })
    if (str(search) != "None"):
        print("The element is:")
        print(search)
    else:
        print("Element not found!")
    return 0
    
catalogServiceSearch("Mesa")
    
#if result.acknowledged:
#    print('Element Added. The element Id is' + str(result.inserted_id))

#search = elements.find_one()
#print(search)