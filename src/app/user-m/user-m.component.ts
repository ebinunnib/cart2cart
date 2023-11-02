import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../servicefile/cartservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-m',
  templateUrl: './user-m.component.html',
  styleUrls: ['./user-m.component.css']
})
export class UserMComponent implements OnInit {
  users: any = []
  constructor(private cs: CartserviceService, private rout: Router) { }
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.cs.getAllUsers().subscribe({
      next: (result: any) => {
        this.users = result.message
        console.log(this.users);

      }
    })
  }

  userDelete(id: any) {
    this.cs.userDelete(id).subscribe({
      next: (result: any) => {
        alert("item deleted")
        this.rout.navigateByUrl("user-m")
      }
    })
  }
  
}