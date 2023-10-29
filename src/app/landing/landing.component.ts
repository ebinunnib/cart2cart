import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../servicefile/cartservice.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  products:any=[]
  constructor(private cs:CartserviceService){}
  
   ngOnInit():void {
    this.cs.getAllProduct().subscribe({
      next:(result:any)=>{
        this.products=result.message
        console.log(this.products);
        
      }

    })
  }

}

