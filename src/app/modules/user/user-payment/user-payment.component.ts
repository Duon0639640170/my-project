import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {
  public dataList: Array<any>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.dataList = userService.getUserPayment();
  }

  ngOnInit(): void {
  }

  deleteData(data) {
    console.log('LOG FN() delete >>::', data);
  }

  onClickTable(data) {
    console.log('LOG FN() onClickTable >>::', data);
    if (data.order_number === '1') {
      const userType = 'home';
      this.router.navigate([`${userType}`]);
    } else if (data.order_number === '100') {
      const userType = 'admin';
      this.router.navigate([`${userType}`]);
    } else if (data.order_number === '111') {
      const userType = 'user';
      this.router.navigate([`${userType}`]);
    } else {
      const userType = 'home';
      this.router.navigate([`${userType}`]);
    }



  }

}
