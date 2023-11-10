import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const option={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  search=new BehaviorSubject("")

  cartCount = new BehaviorSubject(0)


  baseUrl: any = "http://localhost:5111";
  uid: any = ""

  constructor(private http: HttpClient) {





    this.cartUpdate()
  }

  getToken(){
    //create a header object
    const headers=new HttpHeaders()

    if(localStorage.getItem("token")){
      const token =JSON.parse(localStorage.getItem("token") ||"")
      option.headers=headers.append("qaccess_token",token)
    }
    return option
  }



  cartUpdate() {

    if (localStorage.getItem("user")) {
      this.uid = localStorage.getItem("user")
      this.http.get(`${this.baseUrl}/addtocart/count/${this.uid}`).subscribe({
        next: (result: any) => {
          this.cartCount.next(result.message)

        }
      })
    }
  }


  //api login
  loginApi(uname: any, psw: any) {
    const bodyData = { uname, psw }
    return this.http.post(`${this.baseUrl}/admin/login`, bodyData)
  }
  addProduct(body: any) {
    return this.http.post(`${this.baseUrl}/admin/addProduct`, body )
  }
  getAllProduct() {
    return this.http.get(`${this.baseUrl}/admin/getProduct`)
  }
  getProduct(id: any) {
    return this.http.get(`${this.baseUrl}/admin/getOneProduct/${id}`)
  }
  // EDIT PRODUCT
  updateProduct(id: any, bodyData: any) {
    return this.http.put(`${this.baseUrl}/admin/editProduct/${id}`, bodyData)
  }
  //delete api  
  removeProduct(id: any) {
    return this.http.delete(`${this.baseUrl}/admin/deleteProduct/${id}`)
  }

  userRegister(uname: any, email: any, psw: any) {
    const body = { uname, email, psw }
    return this.http.post(`${this.baseUrl}/new-user`,body)
  }
  userLogin(email: any, psw: any) {
    const body = { email, psw }
    return this.http.post(`${this.baseUrl}/user-login`,body)
  }
  booking(userId: any, pId: any) {
    const body = {
      userId, pId
    }
    return this.http.post(`${this.baseUrl}/addtocart`,body)
    // /addtocart
  }
 
  cartcount(id: any) {
    return this.http.get(`${this.baseUrl}/addtocart/count/${id}`)

  }
  cartitems(userid: any) {
    return this.http.get(`${this.baseUrl}/cart/cartitems/${userid}`)

  }
  
  removecart(userid: any) {
    return this.http.delete(`${this.baseUrl}/cart/removecart/${userid}`)
  }
getAllUsers(){
  return this.http.get(`${this.baseUrl}/user-access`)
}
userDelete(userid: any) {
  return this.http.delete(`${this.baseUrl}/user/remove/${userid}`)
}
book(body: any) {
  return this.http.post(`${this.baseUrl}/user/bookForm`,body)
}
getform(id:any) {
  return this.http.get(`${this.baseUrl}/book/form/${id}`)
}
}