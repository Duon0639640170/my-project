import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-homeshop',
  templateUrl: './user-homeshop.component.html',
  styleUrls: ['./user-homeshop.component.css']
})
export class UserHomeshopComponent implements OnInit {

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

  onEdit(data) {
    this.shaerdService.getProductByPD_id(data.pd_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['']);
    });
  }


  private getDataCard() {
    const data = [
      {
        img: '/assets/image/1.jpg',
        deteil: 'ลูฟี่ กัปตันเรือ กลุ่มโจรสลัดหมวกฟาง'
      }, 
    ];
    this.dataCard = data;
  }
}
