import { Component, OnDestroy, OnInit } from '@angular/core';
import {  interval, Subscription} from 'rxjs';
import { products } from '../Products.service';
import { quantity } from '../quantity.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy{
hasOrder=false
isPlaced=false
afterPlaced=true
orders=[{}]
private timer :Subscription;

postOrder:Array<Object>=[{}];
x=0
userData: any;
user: any;
constructor(public products:products, public quantity:quantity, private http:HttpClient){
  let index=0;
  for(let i of this.quantity.quantity)
  {
    if(i>0)this.x++;
    this.quantity.rate[index]=this.quantity.quantity[index]*this.products.product[index].rate
    index++
  }
 if(this.x>0)this.hasOrder=true;
 this.isPlaced=false
}
ngOnInit(){
  this.timer = interval( 100 ).subscribe(()=>{this.checkChange()})
  this.userData= JSON.parse(localStorage.getItem('userData'));
    this.user = this.userData.email
}
ngOnDestroy() {
  this.timer.unsubscribe()
}
checkChange(){
  this.x=0
  let index=0
  for(let i of this.quantity.quantity)
  {
    if(i>0)this.x++;
    this.quantity.rate[index]=this.quantity.quantity[index]*this.products.product[index].rate
    index++
  }
 if(this.x>0)this.hasOrder=true;
 else this.hasOrder=false
}
show(value:any)
{
  if(value>0)
  return true
  else
  return false
}
placeOrder(){
  let id=0;
  for(let q of this.quantity.quantity)
  {
    if(q>0){this.postOrder.push({id:id,name:this.products.product[id].name,quantity:q})}
    id++;
  }
  this.quantity.quantity.fill(0)
  this.http.post(`https://tomato-e3397-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`,{Order:this.postOrder}).subscribe()
 console.log(this.user)
  this.isPlaced=true
 this.afterPlaced=false
}
}
