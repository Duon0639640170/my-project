import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {
  public dataList: Array<any>;

  constructor(
    private userService: UserService
  ) {
    this.dataList = userService.getUserPayment();
  }


  ngOnInit(): void {
  }
  deleteData(data) {
    console.log('LOG FN() delete >>::', data);

  }

}
