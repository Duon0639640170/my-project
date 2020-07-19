import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-parcel',
  templateUrl: './admin-parcel.component.html',
  styleUrls: ['./admin-parcel.component.css']
})
export class AdminParcelComponent implements OnInit {
  public dataList: Array<any>;

  constructor(
    private adminService: AdminService
  ) {
    this.dataList = adminService.getAdminParcel();
  }


  ngOnInit(): void {
  }
  deleteData(data) {
    console.log('LOG FN() delete >>::', data);

  }

}
