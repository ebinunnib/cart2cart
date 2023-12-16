import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CartserviceService } from '../servicefile/cartservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  registerForm = this.fb.group({
    uname: ['', Validators.required], // Adding required validator
    email: ['', [Validators.required, Validators.email]], // Adding required and email validators
    psw: ['', [Validators.required, Validators.minLength(6)]], // Adding required and minimum length validators
    
  })

  constructor(private cs: CartserviceService, private route: Router, private fb: FormBuilder) {

  }
  register() {
    this.cs.userRegister(this.registerForm.value.uname, this.registerForm.value.email,this.registerForm.value.psw).subscribe({
      next: (result: any) => {
        // alert(result.message)
        this.showLoginAlert()
        this.route.navigateByUrl("/user.login")
      },
      error: (result: any) => {
        // alert(result.message)
        this.showLoginAlert2()
      }
    })
  }

  showLoginAlert() {
    Swal.fire({
      
      title: 
      "Account create successfully",
      icon: "success",
      // confirmButtonText: "ok"  
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