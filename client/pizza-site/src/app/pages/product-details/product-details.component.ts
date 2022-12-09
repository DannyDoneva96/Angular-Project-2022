import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OrderDetailsService} from 'src/app/services/order-details.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService){

  }
  getId:any
  productData:any
   ngOnInit(): void {
    this.getId = this.param.snapshot.paramMap.get('id');
    // console.log(this.getId);
    if (this.getId){
      this.service.foodDetails.filter((product:any) =>{
        if(product.id==this.getId){
          this.productData= product
        }
      })
    }
  }
}
