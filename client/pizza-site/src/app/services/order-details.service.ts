import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //Food details 
  foodDetails = [
    { id:1,
      category:'pizza',
       name:'Peperoni',
       description:'Tomato Paste,mozzarella cheese,Pepperoni and spices',
      prise:{
        small:'8$',
        medium:'11$',
        large:'15$',
        xxl:'20$'
      },
      quantity:'',
      imgUrl:'../../../assets/images/pizza-images/pizza/6651283_preview.png',
      
    }, { id:2,
      category:'pizza',
       name:'Margarita',
       description:'San Marzano tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.',
       size:['Small','Medium','Large'],
       price:['8$','11$','15$'],
       quantity:'',
      imgUrl:'../../../assets/images/pizza-images/pizza/png-transparent-pizza-margherita-italian-cuisine-focaccia-new-york-style-pizza-pizza-ingredient-food-cheese-tomato-removebg-preview.png',
      
    }, { id:3,
      category:'pizza',
       name:'Mexicana',
       description:'Tomatoes,cheese,beef,pepper flakes, olive oil, sometimes Parmesan cheese, and fresh basil',
       size:['Small','Medium','Large'],
       price:['8$','11$','15$'],
       quantity:'',
      imgUrl:'../../../assets/images/pizza-images/pizza/Pizza-Download-PNG-Image-png.png',
      
    }, { id:4,
      category:'pizza',
       name:'Agrita',
       description:'cream cheese,tuna,onion,mozzarella cheese and pepper flakes',
       size:['Small','Medium','Large'],
       price:['8$','11$','15$'],
       quantity:'',
      imgUrl:'../../../assets/images/pizza-images/pizza/png-transparent-pizza-margherita-italian-cuisine-dish-food-poultry-food-recipe-cheese-removebg-preview.png',
      
    },
     { id:5,
      category:'pizza',
       name:'Frutti di Mare',
description:'You can choose seafood such as scampi, squid, and mussels. Traditionally, the pizza is served without any cheese, as the seafood is placed on top of the dough and tomato sauce instead',
size:['Small','Medium','Large'],
        price:['8$','11$','15$'],
      quantity:'',
      imgUrl:'',
    }
  ]
}
