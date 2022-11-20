import { Component, OnInit} from '@angular/core';
import { ApiService } from './apiservice.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'blockonomics';
  currencies :any;
  price:any
  selectedCurrency:any

constructor(private httpHelper:ApiService){
    
  }
  ngOnInit(): void {
    this.httpHelper.getCurrencies().subscribe((results)=>{
      this.currencies = results
    })
  }

  handleCurrencyChange(event:any){
    this.selectedCurrency = event.target.value
    this.httpHelper.getPrice(this.selectedCurrency).subscribe((results:any)=>{
      this.price = results.price
    })
  }

  }
