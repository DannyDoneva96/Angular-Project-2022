#  Donevis-Pizzeria-Angular-Project
This app was created for my project defence @ SoftUni for my Angular course 18.12.2022 .
# LIVE DEMO
https://donevis-pizzeria.web.app/

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.



## Built with:

### Frontend:

- Angular 15
- Firebase
- HTML
- SCSS
- Font Awesome 5
- Google Fonts

### Backend & Database:

- Firebase
- FireStore

## Permissions:

| **Permissions for the site**   | User | Guest | 
| :--------------------------    | :---:| :---: |
| View Home page                 | ✅   | ✅   |
| View About page                | ✅   | ✅   |
| See Menu                       | ✅   | ✅   |
| See Produc Details Page        | ✅   | ✅   |
| Add message in Contact page    | ✅   | ✅   |
| See Messages in Messages page  | ✅   | ❌   |
| Login                          | ❌   | ✅   |
| Register                       | ❌   | ✅   |
| Logout                         | ✅   | ❌   |
| Add order                      | ✅   | ✅   |
| See orders                     | ✅   | ❌   |
|Approve order * admin           | ✅   | ❌   |
|Reject order * admin            | ✅   | ❌   |
| Delete order * owner           | ✅   | ❌   |


TODO :
| Edit order   * owner           | ✅   | ❌   |
| Update order * owner           | ✅   | ❌   |
| Create new product             | ✅   | ❌   |
| Edit  product                  | ✅   | ❌   |
| Delete product                 | ✅   | ❌   |



## Start the app

To start the application install all dependecies for the client  `npm install`. 

Then start the client with `ng serve`. 

This will navigate to `http://localhost:4200/` in the browser.

## Application Pages

### Home Page for Guests

Invites the user to log in to their account or to make order as guest. Shows information about deals of the day.
![Home Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/home-page-not-logged.jpg) 

   ###Home Page for Users
![Home Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/home-page-lloged.jpg) 


### Register Page (logged out user)

Register a user  with  **email** and **password**. 

After successful registration redirects to the **Login Page**.

 ![Registration Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/reg-page.jpg) 

### Login Page (logged out user)

Logging an already registered user with the correct **email** and **password**.

After successful login redirects to the **Home page**, with an already logged-in user.

## here are some of the validations for login and register page
 ![Login Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/pass%20not%20match.jpg) 
 ![Login Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/pls-enter-pass.jpg) 
 ![Login Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/wrong-pass.jpg) 
 ![Login Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/invalid%20email.jpg) 

### Logout Page (logged in user)

The logout action is available to logged-in users. Upon success, clear any session information and redirect the user to the **Home page**.

### menu
![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/menu-page.jpg) 

You can choose category of products.

![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/all%20deserts.jpg) 
![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/all-drinks.jpg) 
![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/all-pizzas.jpg) 
![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/all-salad.jpg) 


When you click on product opens the details page where you can add it to the card.


![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/bubble-drinks-det-page.jpg) 

![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/ice-cream-product-det-page.jpg) 
![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/pizza-peperoni-det-page.jpg) 
![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/salada-det-page.jpg) 




### Details Page - (for logged in users and logged out users)

All users should be able to view details about the product.

NOT DONE:If the currently logged-in user is the admin the **Edit** and **Delete** buttons should be displayed, otherwise they should not be available.

If logged-in user isn't the admin, he can make an order.

Information about the products:

- Recipe name
- Recipe description
- Recipe size
- Recipe price



### Add messages in Contact page

The Contact page is available for everyone.it contains form to add message for the owners of the pizzeria.

Upon success, the messages are saved in Database and they are displayed in Messages but can be viewed only from the Admin.

![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/contact-us.jpg) 


### Delete Message in Messages page

Only the admin should be able to see this page

![Recipes Page View](https://github.com/DannyDoneva96/Angular-Project-2022/blob/main/image-readme/messages.jpg) 


NOT DONE:### Edit Product, Add product and delete product 

That can only be done from the admin


## Validation and Error Handling

The application should notify the users about the result of their actions.

In case of error, you should display div with class "error-message".



### Login / Register

- The **Username** is required and should be at least 5 characters long.
- The **email** is required and should be valid email.
- The password is required and should be at least 5 characters long.
- The repeat password should be equal to the password.


### Order

- The **Product* is required
- The **Size** is required

