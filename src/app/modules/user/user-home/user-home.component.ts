import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  productList: Array<any>;
  productListType: Array<any>;
  statusType = '';
  API_URL_IMG = environment.api_url + '/images/';
  product;
  page: any;
  term: string;


  dataCard: { img: string; deteil: string; }[];


  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) {

  }


  ngOnInit(): void {
    this.getProductList('shop_id');

  }

  getProductList(event) {

    const shop = localStorage.getItem('shop');
    console.log('patchValueForm : userId => ', shop);
    this.statusType = event;
    this.shaerdService.getShopByUserId(shop).subscribe((dataUser) => {
      console.log('LOGGGG dataUser', dataUser);
      if (event === 'shop_id') {
        this.shaerdService.getProductByShop_id(dataUser.shop_id).subscribe((data) => {

          console.log('LOGGGG 1 LISTSHOP', data);
          this.productList = data.filter((item: any) => item.shop_id === dataUser.shop_id);
          console.log('LOGGGG 222  this.productList::', this.productList);
        });
      } else {
        this.shaerdService.getProductByTypeId(event).subscribe((data) => {
          console.log(shop, 'LOGGGG 2 LISTSHOP', data);
          this.productListType = data.filter((item: any) => item.shop_id === dataUser.shop_id);

          console.log('LOGGGG 22233  this.productList::', this.productListType);
        });
      }
    });

  }

  // getProductList(data) {
  //   this.shaerdService.getProductByShop_id(data.shop_id).subscribe((res) => {
  //     console.log('LOGGGG LISTSHOP', res);
  //     this.productList = res;
  //     this.router.navigate(['']);
  //   });
  // }

  onDoproduct(data) {
    this.shaerdService.getProductByPD_id(data.pd_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['']);
    });
  }



}
