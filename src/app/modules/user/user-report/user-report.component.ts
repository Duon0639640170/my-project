import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {
  public dataList: Array<any>;

  constructor(
    private userService: UserService
  ) {
    this.dataList = userService.getUserReport();
  }


  ngOnInit(): void {
  }
  deleteData(data) {
    console.log('LOG FN() delete >>::', data);

  }


}
