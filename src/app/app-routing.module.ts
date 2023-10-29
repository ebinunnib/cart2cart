import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserMComponent } from './user-m/user-m.component';
import { ProductMComponent } from './product-m/product-m.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "admin-home", component: AdminHomeComponent },
  { path: "user-m", component: UserMComponent },
  { path: "product-m", component: ProductMComponent },
  { path: "addproduct", component: AddproductComponent },
  { path: "editproduct/:id", component: EditproductComponent},
  { path: "user.login", component: UserloginComponent },
  { path: "user.register", component: UserRegisterComponent },
  { path: "singleview/:id", component: SingleviewComponent },
  { path: "wishlist", component:WishlistComponent },










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
