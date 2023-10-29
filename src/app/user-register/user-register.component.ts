import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CartserviceService } from '../servicefile/cartservice.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  registerForm = this.fb.group({
    uname: [''],
    email: [''],
    psw: [''],
  })

  constructor(private cs: CartserviceService, private route: Router, private fb: FormBuilder) {

  }
  register() {
    this.cs.userRegister(this.registerForm.value.uname, this.registerForm.value.email,this.registerForm.value.psw).subscribe({
      next: (result: any) => {
        alert(result.message)
        this.route.navigateByUrl("/user.login")
      },
      error: (result: any) => {
        alert(result.message)
      }
    })
  }
}