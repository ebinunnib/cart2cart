import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../servicefile/cartservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-bookedrooms',
  templateUrl: './bookedrooms.component.html',
  styleUrls: ['./bookedrooms.component.css']
})
export class BookedroomsComponent implements OnInit {

  count:any=0
  pdata:any=[]
  id: any=""
  total:Number=0
  uid: any;

  constructor(private cs:CartserviceService,private rout:Router){}
  ngOnInit(): void {
    this.cartcounts()
   this.cartitems()
 
}
cartcounts(){
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
