import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-shopme',
  templateUrl: './user-shopme.component.html',
  styleUrls: ['./user-shopme.component.css']
})
export class UserShopmeComponent implements OnInit {
  productList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
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
    this.getProductList();

  }

  getProductList() {
    this.shaerdService.getAllProduct().subscribe((data) => {
      console.log('LOGGGG LISTSHOP', data);
      this.productList = data;
    });
  }

  onDoproduct(data) {
    this.shaerdService.getProductByPD_id(data.pd_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['']);
    });
  }

  onEdit(data) {
    this.shaerdService.getProductByPD_id(data.pd_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['/user/editproduct']);
    });
  }

  deleteData(data: any) {
    this.shaerdService.deleteProductByPD_id(data.pd_id).subscribe(() => {
    window.location.reload();
    });
  }

 
}
