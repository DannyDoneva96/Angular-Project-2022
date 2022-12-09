import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private param:ActivatedRoute){

  }
  getId:any

   ngOnInit(): void {
    this.getId = this.param.snapshot.paramMap.get('id');
   }
}
