import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartserviceService } from '../servicefile/cartservice.service';

@Component({
  selector: 'app-product-m',
  templateUrl: './product-m.component.html',
  styleUrls: ['./product-m.component.css']
})
export class ProductMComponent implements OnInit {
  pdata: any = []
  id: any=""

  constructor(private rout: Router, private cs: CartserviceService, private ar: ActivatedRoute) { }
  ngOnInit(): void {

   

    this.cs.getAllProduct().subscribe({
      next: (result: any) => {
        this.pdata = result.message
        console.log(this.pdata);

      }
    })


  }

  addproduct() {
    this.rout.navigateByUrl("addproduct")

  }

  editproduct(id:any) {
    this.rout.navigateByUrl(`editproduct/${id}`)


  }
  deletep(id:any) {
    this.cs.removeProduct(id).subscribe({
      next: (result: any) => {
        alert("item deleted")
        this.rout.navigateByUrl("product-m")
        this.cs.getAllProduct()
      }
    })
  }
}
