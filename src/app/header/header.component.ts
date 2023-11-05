import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../servicefile/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 count:any=0
  pdata:any=[]
  id: any=""
  total:Number=0
  uid: any;
  searchData:any=""
  isLoggedIn: boolean = false; // Set this to true when the user is logged in

  constructor(private cs:CartserviceService,private rout:Router){

    const user = localStorage.getItem('user');
    this.isLoggedIn = user !== null;
  }
  ngOnInit(): void {
    this.cartcounts()
    
  

  
 
}
cartcounts(){
  this.cs.cartCount.subscribe((data:any)=>{
    console.log(data);
    this.count=data

  
})

    
}
accessData(event:any){
  this.searchData=event.target.value
  this.cs.search.next(this.searchData)
  console.log(this.searchData);
}

cartitems() {
  if (localStorage.getItem("user")) {
    this.id = localStorage.getItem("user");
    console.log(this.id);
    
    this.cs.cartitems(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        
        this.pdata=data.message
        this.rout.navigateByUrl('bookedrooms')

       
        
      },
      error: (error: any) => {
        alert(error)
      }
    })
  }
}

marginPrice(){
  let totalPrice = 0
  for (const item of this.pdata) {
    totalPrice += item.price * item.quantity;
  }
  this.total = totalPrice;
}

toWishlist(){
  localStorage.getItem("user")
  this.uid=localStorage.getItem("user")
  this.rout.navigateByUrl('/wishlist/'+this.uid)
}
logout() {
  localStorage.removeItem("user");
  this.isLoggedIn = false;
  this.rout.navigateByUrl('user.login')
}

login(){

  this.rout.navigateByUrl('user.login')
  this.isLoggedIn = true;

}
removecart(id:any){
  this.uid=localStorage.getItem("user")
   this.cs.removecart(id).subscribe({
    next: (result: any) => {
      this.pdata=[result.message]
     this.cs.cartUpdate()
     this.cartitems()

     
      
    }

   })
}

}