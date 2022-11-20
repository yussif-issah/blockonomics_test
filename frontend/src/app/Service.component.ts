import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class HttpService{
   constructor(private http:HttpClient){}

   private currencyUrl ="http://127.0.0.1:5000/get-currencies"
   private priceUrl = "http://127.0.0.1:5000/get-price/"


   getCurrencies(){
    return this.http.get(this.currencyUrl,{
        'headers':{
            'Content-Type':'application/x-www-form-urlencoded',
        },
    });
   }

   getPrice(code:string):any{
    return this.http.get(this.priceUrl+code,{
        'headers':{
            'Content-type':'application/json'
        }
    })
   }
}