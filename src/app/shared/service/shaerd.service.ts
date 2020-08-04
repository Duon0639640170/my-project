import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShaerdService {

  private API_URL = environment.api_url;
  private APIREGISTER_URL = environment.apiregister_url;
  constructor(private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public register(body: any) {
    return this.http.post<any>(this.APIREGISTER_URL + '/user/save', body, this.httpOption);
  }

  public saveresgister(body: any) {
    const http = 'http://localhost:9000';
    return this.http.post<any>(`${http}` + '/user/save', body, this.httpOption);
  }

  public saveshop(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/shop/save', body, this.httpOption);
  }
  public saveProduct(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/product/save', body, this.httpOption);
  }
  public updateProduct(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/product/update', body, this.httpOption);
  }
  public updatePayment(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/payment/update', body, this.httpOption);
  }
  public savePayment(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/payment/save', body, this.httpOption);
  }



  public getUser() {
    return this.http.get<any>(this.API_URL + '/user/{username}');
  }

  public listUser() {
    return this.http.get<any>(this.API_URL + '/user/all');
  }

  public getAllShop() {
    return this.http.get<any>(this.API_URL + '/shop');
  }

  public getAllShopByShop(body: any) {
    console.log('LOGG >>> getAllShopByShop()>::', this.API_URL + '/shop/' + `${body}`); // http://localhost:9081/it-api/shop/&{3}

    return this.http.get<any>(this.API_URL + '/shop/' + `${body}`);
  }

  public getProductByPD_id(body: any) {
    return this.http.get<any>(this.API_URL + '/product/' + `${body}`);
  }

  public getAllProduct() {
    return this.http.get<any>(this.API_URL + '/product');
  }

  public getAllPayment() {
    return this.http.get<any>(this.API_URL + '/payment');
  }

  public getPaymentByShop(body: any) {
    return this.http.get<any>(this.API_URL + '/payment/' + `${body}`);
  }

  public deleteProductByPD_id(pdId: any) {
    return this.http.delete<any>(this.API_URL + '/product/' + pdId);
  }
  

//http://localhost:9000/user/{username}
  // http://localhost:9000/user/all
  // http://localhost:9081/it-api/order/save
  //http://localhost:9081/it-api/shop/save
  // http://localhost:9081/it-api/shop
  //http://localhost:9081/it-api/product
  //http://localhost:9081/it-api/product/getAllProduct
//http://localhost:9081/it-api/product/update
//http://localhost:9081/it-api/payment
//http://localhost:9081/it-api/payment/save
//http://localhost:9081/it-api/product/delete
}
