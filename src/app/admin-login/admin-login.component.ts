import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router,} from '@angular/router';
import { CartserviceService } from '../servicefile/cartservice.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  AdminLoginform=this.fb.group({
    uname:['',[Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw:['',[Validators.required, Validators.pattern('[0-9A-Za-z]+')]]
  })
  constructor(private fb:FormBuilder, private rout:Router, private cs:CartserviceService){}
  ngOnInit():void{
      
  }
  // adminhome(){
  //   this.rout.navigateByUrl('admin-home')

    login() {
      var uname=this.AdminLoginform.value.uname
      var psw=this.AdminLoginform.value.psw
  
      if(this.AdminLoginform.valid){
        
        this.cs.loginApi(uname,psw).subscribe({
          next:(result:any)=>{
  
            alert(result.message)
  
            //redirection
            this.rout.navigateByUrl("admin-home")
  
          },
          error:(result:any)=>{
            alert(result.error.message)
  
  
          }
          
        })
  
      }
      else{
        alert("invalid form")
      }
    }
  }
