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
      this.showFooter = event.url.includes('admin')||event.url.includes('addproduct')||event.url.includes('editproduct')
      this.showHeader = event.url.includes('admin')||event.url.includes('addproduct')||event.url.includes('editproduct')
    }
  });
}
}
