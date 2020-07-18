import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-shop',
  templateUrl: './admin-shop.component.html',
  styleUrls: ['./admin-shop.component.css']
})
export class AdminShopComponent implements OnInit {
  public dataList : Array <any>;

  constructor(
    private adminService: AdminService
    ) 
  {
    this.dataList = adminService.getAdminShop (); 
  }
  
 
  ngOnInit(): void {
  }
  deleteData(data) {
    console.log('LOG FN() delete >>::', data);
    
  }
}


