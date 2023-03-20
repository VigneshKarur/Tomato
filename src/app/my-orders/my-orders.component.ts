import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { products } from '../Products.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit{
  data:any 
  dataArray=[[]]
  product=this.products.product

   constructor(private http:HttpClient, public products:products){} 

   ngOnInit(){
     this.http.get(`https://tomato-e3397-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`)
     .subscribe((res)=>{
      this.data=res
      for(let r in this.data){
        
        this.dataArray.push(this.data[r].Order)
      }
      console.log(this.dataArray)
   })
  }
}
