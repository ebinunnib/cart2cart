import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../servicefile/cartservice.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class ROOMSComponent implements OnInit {
    products:any=[]
    categoryProducts: any = []
  searchString: any = ""
    constructor(private cs:CartserviceService){}
    
     ngOnInit():void {
      this.cs.getAllProduct().subscribe({
        next:(result:any)=>{
          this.products=result.message
          console.log(this.products);
          
          this.categoryProducts = this.products

        }
  
      })
      this.cs.search.subscribe((data: any) => {
        this.searchString = data
      })
    }
    categoryProduct(catId: any) {
      this.categoryProducts = this.products.filter((item: any) =>
        item["categoryId"] == catId || catId == "")
      console.log(this.categoryProduct);
  
    }
  
  
  }


