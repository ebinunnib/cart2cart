import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartserviceService } from '../servicefile/cartservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forbook',
  templateUrl: './forbook.component.html',
  styleUrls: ['./forbook.component.css']
})
export class ForbookComponent implements OnInit {
  constructor(private fb: FormBuilder, private cs: CartserviceService, private rout: Router) { }
  SelectType: any = ""
uid:any=""
  BookForm = this.fb.group({
    Fullname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    phonenum: ['', [Validators.required]],
    address: ['', [Validators.required]],
    checkin: ['', [Validators.required]],
    checkout: ['', [Validators.required]],
    adults: ['', [Validators.required]],
    children: ['', [Validators.required]],
    splreq: ['', [Validators.required]],
    roomtype: ['', [Validators.required]],

  })
  ngOnInit(): void { }
  book() {
    const Path = this.BookForm.value
    const bodyData = {
      Fullname: Path.Fullname,
      email: Path.email,
      phonenum: Path.phonenum,
      address: Path.address,
      checkin: Path.checkin,
      checkout: Path.checkout,
      adults: Path.adults,
      children: Path.children,
      roomtype: Path.roomtype,
      splreq: Path.splreq
    }
    this.cs.book(bodyData).subscribe({
      next: (result: any) => {
        console.log(result.message);

        alert(result.message)


      }
    })
  }
  updateSelectType() {
    const typevalue = this.BookForm.get("roomtype")?.value;
    this.SelectType = typevalue;
  }

bookitems(){
  if(localStorage.getItem("user")){
  this.uid=localStorage.getItem("user")

  }
}
showLoginAlert() {
  Swal.fire({
    title: " Booking Success!",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool"
  });
}

}
