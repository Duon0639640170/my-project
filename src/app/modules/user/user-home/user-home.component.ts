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
  API_URL_IMG = environment.api_url + "/images/"
  product;
 


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
      this.productList = data
    });
  };

  onDoproduct(data) {
    this.shaerdService.getProductByPD_id(data.pd_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['/user/doproduct']);
    });
  }


  private getDataCard() {
    const data = [
      {
        img: '/assets/image/ff.jpg',
        deteil: 'ลูฟี่ กัปตันเรือ กลุ่มโจรสลัดหมวกฟาง'
      },
    ];
    this.dataCard = data;
  }
}