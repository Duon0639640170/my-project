import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

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

  public getUserByUserId(userId: number) {
    return this.http.get<any>(this.APIREGISTER_URL + '/user-by-user/' + `${userId}`);
  }

  public register(body: any) {
    return this.http.post<any>(this.APIREGISTER_URL + '/user/save', body, this.httpOption);
  }

  public update(body: object) {
    console.log('LOG API update  URL>>>>:', this.APIREGISTER_URL + '/user/update');

    console.log('LOG API update  body>>>>:', body);
    return this.http.post<any>(this.APIREGISTER_URL + '/user/update', body, this.httpOption);
  }

  public getUser(username: string) {
    return this.http.get<any>(this.APIREGISTER_URL + '/user/' + `${username}`);
  }

  public listUser() {
    return this.http.get<any>(this.APIREGISTER_URL + '/user/all');
  }

  public saveresgister(body: any) {
    return this.http.post<any>(this.APIREGISTER_URL + '/user/save', body, this.httpOption);
  }

  public uploadImage(body: any) {
    return this.http.post<any>(this.API_URL + '/upload/file', body, {responseType: 'text' as 'json'});
  } 

  public updateProduct(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/product/update', body, this.httpOption);
  }

  public saveshop(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/shop/save', body, this.httpOption);
  }

  public saveProduct(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/product/save', body, this.httpOption);
  }

  public updateShop(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/shop/update', body, this.httpOption);
  }

  public updatePayment(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/payment/update', body, this.httpOption);
  }

  public savePayment(body: any) {
    const http = 'http://localhost:9081';
    return this.http.post<any>(`${http}` + '/it-api/payment/save', body, this.httpOption);
  }

  public orderReport(shopId: any) {
    return this.http.get<any>(this.API_URL + '/report/orderReport/' + `${shopId}`, { responseType: 'blob' as 'json' }).pipe(
        map(respose => {
        if (respose.size !== 0) {
          return new Blob([respose], { type: 'application/pdf' });
        } else {
          return null;
        }
      })
      );
  }

  public generateReport(): any {
    return this.http.get<any>(this.API_URL + '/report/generateReport', { responseType: 'blob' as 'json' })
      .pipe(
        map(respose => {
        if (respose.size !== 0) {
          return new Blob([respose], { type: 'application/pdf' });
        } else {
          return null;
        }
      })
      );
  }

  public getAllShop() {
    return this.http.get<any>(this.API_URL + '/shop');
  }

  public deleteShopByShop_id(pdId: any) {
    return this.http.delete<any>(this.API_URL + '/shop/' + pdId);
  }

  public getShopByShop_id(body: any) {
    return this.http.get<any>(this.API_URL + '/shop/' + `${body}`);
  }

  public getShopByUserId(id: any) {
    return this.http.get<any>(this.API_URL + '/shop-by-id/' + `${id}`);
  }

  public getProductByShop_id(shop_id: any) {
    return this.http.get<any>(this.API_URL + '/product-by-shop_id/' + `${shop_id}`);
  }
  // public getShopByShop_id(body: any) {
  //   console.log('LOGG >>> getShopByShop_id()>::', this.API_URL + '/shop/' + `${body}`); // http://localhost:9081/it-api/shop/&{3}

  //   return this.http.get<any>(this.API_URL + '/shop/' + `${body}`);
  // }

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

  public getOrderByOrder(body: any) {
    return this.http.get<any>(this.API_URL + '/order/' + `${body}`);
  }

  public getAllOrder() {
    return this.http.get<any>(this.API_URL + '/order');
  }

  public getTypeByTypeId(typeId: any) {
    return this.http.get<any>(this.API_URL + '/type/' + typeId);
  }

  public getProductByTypeId(body: any) {
    return this.http.get<any>(this.API_URL + '/product-by-type-id/' + `${body}`);
  }

  

  //http://localhost:9000/user/{username}
  // http://localhost:9000/user/all
  // http://localhost:9081/it-api/order/save
  //http://localhost:9081/it-api/shop/save
  // http://localhost:9081/it-api/shop
  //http://localhost:9081/it-api/shop
  // http://localhost:9081/it-api/shop/update
  //http://localhost:9081/it-api/product
  //http://localhost:9081/it-api/product/getAllProduct
  //http://localhost:9081/it-api/product/update
  //http://localhost:9081/it-api/payment
  //http://localhost:9081/it-api/payment/save
  //http://localhost:9081/it-api/product/delete
  //http://localhost:9081/it-api/order/{shop_id}
  //http://localhost:9081/it-api/order

  //http://localhost:9081/it-api/report/generateReport
  //http://localhost:9000/user/update
  //http://localhost:9000/user/all
  //http://localhost:9081/it-api/type/
}
