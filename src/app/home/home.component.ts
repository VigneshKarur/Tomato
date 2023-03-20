import { Component } from '@angular/core';
import { products } from '../Products.service';
import { quantity } from '../quantity.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  home:string='home'
  product={name:'',description:''}
  productscopy=this.products.product.slice()
  constructor(public products:products, public quantity:quantity){
    this.products.product
  }
}
