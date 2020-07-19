import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {
  public dataList: Array<any>;

  constructor(
    private adminService: AdminService
  ) {
    this.dataList = adminService.getAdminReport();
  }


  ngOnInit(): void {
  }
  deleteData(data) {
    console.log('LOG FN() delete >>::', data);

  }
}
