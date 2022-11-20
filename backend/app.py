from flask import Flask
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cors =CORS(app,resources={r'/':{"origins":"*"}})

@app.route("/get-price/<string:code>",methods=['GET'])
def getPrice(code):
    URL = "https://www.blockonomics.co/api/price?currency="
    HEADERS = {
        'Content-type':'application/json'
    }
    req = requests.get(url=URL+str(code),headers=HEADERS,verify=False)
    return req.json()

@app.route("/get-currencies",methods=['GET'])
def getCurrencies():
    URL = "https://www.blockonomics.co/api/currencies"
    HEADERS ={
        'Content-type':'application/json'
    }
    req = requests.get(url=URL,headers=HEADERS,verify=False)
    return req.json()

if __name__=="__main__":
    app.run(debug=True)