import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  productList: Array<any>;
  productListType: Array<any>;
  statusType = '';
  API_URL_IMG = environment.api_url + "/images/"
  product;
  term: string;



  dataCard: { img: string; deteil: string; }[];


  constructor(
    private shaerdService: ShaerdService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getProductList('0');

  }

  getProductList(event) {
    console.log('LOG event >>:', event);

    this.statusType = event;
    console.log('LOGGGG 1  this.productList::', this.productList);
    if (event === '0') {
      this.shaerdService.getAllProduct().subscribe((data) => {
        console.log('LOGGGG 1 LISTSHOP', data);
        this.productList = data;
        console.log('LOGGGG 222  this.productList::', this.productList);
      });
    } else {
      this.shaerdService.getProductByTypeId(event).subscribe((data) => {
        console.log('LOGGGG 2 LISTSHOP', data);
        this.productListType = data;
      });
    }
  }

  onDoproduct(data) {
    this.shaerdService.getProductByPD_id(data.pd_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['/admin/doproduct']);
    });
  }

}

