import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartserviceService } from '../servicefile/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  constructor(private fb: FormBuilder,private cs:CartserviceService,private rout:Router) { }
  addProductForm = this.fb.group({
    Rname: ['', [Validators.required]],
    price: ['', [Validators.required]],
    discription: ['', [Validators.required]],
    image: ['', [Validators.required]],
    count: ['', [Validators.required]],
  })
  ngOnInit(): void { }
  addProduct() {
    const Path=this.addProductForm.value
    const bodyData = {
      Rname:Path.Rname,
      price:Path.price,
      discription:Path.discription,
      image:Path.image,
      count:Path.count
    }

    
    this.cs.addProduct(bodyData).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.rout.navigateByUrl("/Room-m")

        
      }
    })

  }



}
