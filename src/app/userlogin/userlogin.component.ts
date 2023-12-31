import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartserviceService } from '../servicefile/cartservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent  implements OnInit {
  UserlogForm=this.fb.group({
    email:[''],
    psw:['']
  })
  constructor(private rout:Router, private fb:FormBuilder,private cs:CartserviceService){}
  ngOnInit(): void {}
  login(){
    this.cs.userLogin(this.UserlogForm.value.email,this.UserlogForm.value.psw).subscribe({
next:(result:any)=>{
  // alert(result.message)
 
  localStorage.setItem("user",result._id)
  localStorage.setItem("token",result.token)
  localStorage.setItem("currentname",result.currentuser)
  this.showLoginAlert()
  this.rout.navigateByUrl("")
 },
 error:(result:any)=>{
  // alert(result.error.message)
  this.showLoginAlert2()
 }

    })



  }
  showLoginAlert() {
    Swal.fire({
      
      title: 
      " Welcome Buddy....!!",
      icon: "success",
      confirmButtonText: "ok"
    });
  }

  showLoginAlert2() {
    Swal.fire({
      title: "incorrect details!",
      text: "Do you want to continue",
      icon: "warning",
      confirmButtonText: "ok"
    });
  }

}
