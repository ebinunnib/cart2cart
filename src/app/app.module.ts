import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserMComponent } from './user-m/user-m.component';
import { ProductMComponent } from './product-m/product-m.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BookedroomsComponent } from './bookedrooms/bookedrooms.component';
import { ROOMSComponent } from './rooms/rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { HeadSearchPipe } from './pipes/headSearch/head-search.pipe';
import { ForbookComponent } from './forbook/forbook.component';
import { FormViewComponent } from './form-view/form-view.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    UserMComponent,
    ProductMComponent,
    AddproductComponent,
    EditproductComponent,
    UserloginComponent,
    UserRegisterComponent,
    SingleviewComponent,
    WishlistComponent,
    BookedroomsComponent,
    ROOMSComponent,
    HeadSearchPipe,
    ForbookComponent,
    FormViewComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
