import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../servicefile/cartservice.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
  uid: any=""
  pid: any=""

  constructor(private cs:CartserviceService,private rout:Router ,private ar:ActivatedRoute){}
  ngOnInit(): void {
   this.cartitems()

   this.ar.params.subscribe((data:any)=>{
    this.pid=data.id
    console.log(this.pid)
    

  })
 
}

    

preview(){
  if (localStorage.getItem("user")) {
    this.id = localStorage.getItem("user");
    console.log(this.id);
    
    this.cs.getform(this.id).subscribe({
      next: (data: any) => {
        console.log("pevw:::",data);
        
        this.pdata=data.message
        console.log("ppeviwe:::",this.pdata);
        
       
       
        
      },
      error: (error: any) => {
        alert(error)
      }
    })
  }
}



cartitems() {
  if (localStorage.getItem("user")) {
    this.id = localStorage.getItem("user");
    console.log(this.id);
    
    this.cs.cartitems(this.id).subscribe({
      next: (data: any) => {
        console.log("cart bookd",data);
        
        this.pdata=data.message 
        // this.rout.navigateByUrl("product-m")

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
