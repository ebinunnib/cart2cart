import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cart';
constructor( private router:Router){}
  showFooter: boolean = true;
  showHeader:boolean=true
ngOnInit(): void {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.showFooter = event.url.includes('admin')||event.url.includes('addproduct')||event.url.includes('editproduct')||event.url.includes('admin-login')
      this.showHeader = event.url.includes('admin')||event.url.includes('addproduct')||event.url.includes('editproduct')||event.url.includes('admin-login')
      this.showHeader = event.url.includes('user.login')||event.url.includes('user.register')||event.url.includes('admin-login')||event.url.includes('admin-home')||event.url.includes('Room-m')||event.url.includes('addproduct')||event.url.includes('editproduct')
      this.showFooter = event.url.includes('user.login')||event.url.includes('user.register')||event.url.includes('admin-login')||event.url.includes('admin-home')||event.url.includes('Room-m')||event.url.includes('addproduct')||event.url.includes('editproduct')


    }
  });
}
}
