import { Component, Input } from '@angular/core';
import { products } from 'src/app/Products.service';
import { quantity } from 'src/app/quantity.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() name=''
  @Input() desc=''
  @Input() img=''
  @Input() id=0
  @Input() place=''
  
  constructor(public products:products, public quantity:quantity){
    console.log(typeof(quantity.quantity))
    this.desc = this.desc.slice(20)
  }
}
