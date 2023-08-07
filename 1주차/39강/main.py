from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    id: int
    content:str


items = ['맥북','애플워치','아이폰', '에어팟']

#path parameter 
#@app.get("/items")
#def read_items():
#    return items

@app.get("/items/{id}")
def read_id_item(id):
    return items[int(id)]

#query parameter
@app.get("/items")
def read_item(skip:int=0, limit:int=0):
    return items[skip:skip+limit]

@app.post("/items")
def post_item(item:Item):
    items.append( item.content )
    return "성공했습니다!"