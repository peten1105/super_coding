from fastapi import FastAPI

app = FastAPI()

@app.get("/hello")
def sayHello():
    return {"message":"Hello world"}

#uvicorn
#uvicorn main:app --reload

@app.get("/")
def sayWellcome():
    return {"message":"wellcome"}