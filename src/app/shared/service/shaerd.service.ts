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
  

  public saveProduct(body: any) {
    const http = 'http://localhost:9081';
    

    return this.http.post<any>(`${http}` + '/it-api/order/save', body, this.httpOption);
  }

  public getAllShop() {
    return this.http.get<any>(this.API_URL + '/it-api/shop');
  }

  public getAllShopByShop(body: any) {
    return this.http.get<any>(this.API_URL + '/it-api/shop/' + `${body}`);
  }

  public getProductByPD_id(body: any) {
    return this.http.get<any>(this.API_URL + '/it-api/product/' + `${body}`);
  }

  public getAllProduct() {
    return this.http.get<any>(this.API_URL + '/it-api/product');
  }

  // http://localhost:9081/it-api/order/save
  // http://localhost:9081/it-api/shop
  //http://localhost:9081/it-api/product
  //http://localhost:9081/it-api/product/getAllProduct
}
