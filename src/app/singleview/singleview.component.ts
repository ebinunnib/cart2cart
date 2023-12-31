import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../servicefile/cartservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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
  book(){
    if(localStorage.getItem("user")){
    if (localStorage.getItem("user")){
      this.uid=localStorage.getItem("user")
      this.cs.booking(this.uid,this.pid).subscribe({
        next:(result:any)=>{
          // alert(result.message)
          // this.cs.cartUpdate()
          this.rout.navigateByUrl("/forbook")
        }
      })
    }

    }else{
      this.showLoginAlert()
      this.rout.navigateByUrl("/user.login")

    }
  } 
 showLoginAlert() {
    Swal.fire({
      title: "Please Login first !",
      icon: "warning",
      confirmButtonText: "Close"
    });
  }
}
