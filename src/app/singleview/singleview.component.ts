import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../servicefile/cartservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit {
  pid: any=""
  pdata:any=[]
  uid:any=""

  constructor(private rout:Router,private cs:CartserviceService, private ar:ActivatedRoute){
    
  }
  ngOnInit(): void {

    this.ar.params.subscribe((data:any)=>{
      this.pid=data.id
      console.log(this.pid);
      
    this.cs.getProduct(this.pid).subscribe({
      next:(result:any)=>{
        this.pdata=[result.message]
        console.log(this.pdata);
        

      }
    
    })
    })

  }
  booking(){
    if(localStorage.getItem("user")){
    if (localStorage.getItem("user")){
      this.uid=localStorage.getItem("user")
      this.cs.addToCart(this.uid,this.pid).subscribe({
        next:(result:any)=>{
          alert(result.message)
          this.cs.cartUpdate()
        }
      })
    }

    }else{
      alert("please login first")
      this.rout.navigateByUrl("/user.login")

    }
  } 
 
}
