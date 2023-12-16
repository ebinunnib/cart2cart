import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartserviceService } from '../servicefile/cartservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  pdata: any={}
  pid: any=""

constructor(private rout:Router,private cs:CartserviceService,private ar:ActivatedRoute ){}

  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data.id
      console.log(this.pid)
      
  
    this.cs.getProduct(this.pid).subscribe({
      next:(result:any)=>{
        this.pdata=result.message
        console.log(this.pdata);
        
      }
    })
    })
   }


  editProduct(){
    this.cs.updateProduct(this.pid,this.pdata).subscribe({
      next:(result:any)=>{
        alert("data updated successfull")
        this.rout.navigateByUrl('/Room-m')

      }
  })
}

}
