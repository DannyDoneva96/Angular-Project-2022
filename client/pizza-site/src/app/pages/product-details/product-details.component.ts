import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service'
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  //   constructor(private param:ActivatedRoute,private service:OrderDetailsService){

  //   }
  //   getId:any
  //   productData:any

  //    ngOnInit(): void {

  //     this.getId = this.param.snapshot.paramMap.get('category');
  //     console.log(this.getId);
  //     if (this.getId){
  //       this.service.foodDetails.filter((product:any) =>{
  //         if(product.id==this.getId){
  //           this.productData= product
  //         }
  //       })
  //     }
  //   }
  // }

  getCategory: any = ''
  public data: any = []
  getID : any =''
  pizza:any = ''

  constructor(private param: ActivatedRoute, public firestore: Firestore) {
    this.getData()
  }

  getData() {

    this.getCategory = this.param.snapshot.paramMap.get('category');
    this.getID = this.param.snapshot.paramMap.get('id');

    const dbInstance = collection(this.firestore, this.getCategory);
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
         console.log(this.data ,"first"
          );

          if (this.data) {
          

          this.data.forEach((product: any) => {
            
            if(product.id === this.getID){
             return  this.pizza = product
            }
                  
            })
          }
        
      })
     

    
  }






}