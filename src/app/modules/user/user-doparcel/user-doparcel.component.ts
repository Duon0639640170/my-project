import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-doparcel',
  templateUrl: './user-doparcel.component.html',
  styleUrls: ['./user-doparcel.component.css']
})
export class UserDoparcelComponent implements OnInit {
  public dataList: Array<any>;

  constructor(
    private userService: UserService
  ) {
    this.dataList = userService.getUserDoparcel();
  }


  ngOnInit(): void {
  }
  deleteData(data) {
    console.log('LOG FN() delete >>::', data);

  }
}
