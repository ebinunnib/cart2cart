import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../servicefile/cartservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent  implements OnInit {
  pdata: any={}
  // pid: any=""
  
  constructor(private rout:Router,private cs:CartserviceService,private ar:ActivatedRoute ){}
  ngOnInit(): void {
   
      
  
    this.cs.getform().subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        console.log(this.pdata);
        
      }
    })
  

  }


}
