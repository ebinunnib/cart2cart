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
    pname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    price: ['', [Validators.required, Validators.pattern('[0-9A-Za-z]+')]],
    discription: ['', [Validators.required]],
    image: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    rating: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    count: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
  })
  ngOnInit(): void { }
  addProduct() {
    const Path=this.addProductForm.value
    const bodyData = {
      pname:Path.pname,
      price:Path.price,
      discription:Path.discription,
      image:Path.image,
      rating:Path.rating,
      count:Path.count
    }

    
    this.cs.addProduct(bodyData).subscribe({
      next:(result:any)=>{
        alert(result.message)
        this.rout.navigateByUrl("product-m")

        
      }
    })

  }



}
