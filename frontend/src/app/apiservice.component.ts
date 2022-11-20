import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ApiService {
    constructor(private http:HttpClient){

    }

    private currency_url = "http://127.0.0.1:5000/get-currencies"
    private price_url = "http://127.0.0.1:5000/get-price/"

    getCurrencies(){
        return this.http.get(this.currency_url,{
            'headers':{
                'Content-type':'application/json'
            }
        })
    }

    getPrice(code:string){
        return this.http.get(this.price_url+code,{
            'headers':{
                'Content-type':'application/json'
            }
        })
    }
}