import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { products } from '../Products.service';
import { quantity } from '../quantity.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  product={name:'',description:''}
  productscopy=this.products.product.slice()
  constructor(public products:products, public quantity:quantity){
    this.products.product
  }
}
