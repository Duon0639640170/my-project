import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-homeshop',
  templateUrl: './user-homeshop.component.html',
  styleUrls: ['./user-homeshop.component.css']
})
export class UserHomeshopComponent implements OnInit {

  shopList: Array<any>;
  product;

  
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
      this.shopList = data
    });
  };

  onEdit(data) {
    this.shaerdService.getProductByPD_id(data.pd_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['']);
    });
  }


}
