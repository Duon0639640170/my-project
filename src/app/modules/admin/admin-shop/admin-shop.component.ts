import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';
import { environment } from 'src/environments/environment';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-shop',
  templateUrl: './admin-shop.component.html',
  styleUrls: ['./admin-shop.component.css']
})
export class AdminShopComponent implements OnInit {
  shopList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  shop;

  dataCard: { img: string; deteil: string; }[];
  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    this.getShopList();
  }


  getShopList() {
    this.shaerdService.getAllShop().subscribe((data) => {
      console.log('LOGGGG LISTSHOP', data);
      this.shopList = data;
    });
  }

  deleteData(data: any) {
    this.shaerdService.deleteShopByShop_id(data.shop_id).subscribe(() => {
    window.location.reload();
    });
  }
}


