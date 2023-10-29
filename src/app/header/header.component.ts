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

  constructor(private cs:CartserviceService,private rout:Router){}
  ngOnInit(): void {
    this.cs.cartCount.subscribe((data:any)=>{
        console.log(data);
        this.count=data

      
   })
}
cartitems() {
  if (localStorage.getItem("user")) {
    this.id = localStorage.getItem("user");
    console.log(this.id);
    
    this.cs.cartitems(this.id).subscribe({
      next: (data: any) => {
        console.log(data);
        
        this.pdata=data.message
       
       
        
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
}

login(){

  this.rout.navigateByUrl('user.login')

}

}