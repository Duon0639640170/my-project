import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  productList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  product;

  dataCard: { img: string; deteil: string; }[];
  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {
    this.shaerdService.getAllProduct().subscribe((data) => {
      console.log('LOGGGG LISTSHOP', data);
      this.productList = data;
    });
  }

  deleteData(data: any) {
    this.shaerdService.deleteProductByPD_id(data.pd_id).subscribe(() => {
    window.location.reload();
    });
  }
}
