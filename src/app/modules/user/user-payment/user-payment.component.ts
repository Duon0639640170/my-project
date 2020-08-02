import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {
  public paymentList: Array<any>;
  payment;

  dataCard: { img: string; deteil: string; }[];

  constructor(
    // private fb: FormBuilder,
    private shaerdService: ShaerdService,
    // private activatedroute: ActivatedRoute,
    // private userService: UserService,
    private router: Router
  ) { }

 
  ngOnInit(): void {
    this.getPaymentList();
  }

  getPaymentList() {
    this.shaerdService.getAllPayment().subscribe((data) => {
      console.log('LOGGGG LISTSHOP', data);
      this.paymentList = data
    });
  };

 
  

  deleteData(data) {
    console.log('LOG FN() delete >>::', data);
  }

  onClickTable(data) {
    console.log('LOG FN() onClickTable >>::', data);
    this.shaerdService.getPaymentByShop(data.pm_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.payment = res;
      this.router.navigate(['/user/dopayment']);
    });



  }
    // if (data.order_number === '1') {
    //   const userType = 'home';
    //   this.router.navigate([`${userType}`]);
    // } else if (data.order_number === '100') {
    //   const userType = 'admin';
    //   this.router.navigate([`${userType}`]);
    // } else if (data.order_number === '111') {
    //   const userType = 'user';
    //   this.router.navigate([`${userType}`]);
    // } else {
    //   const userType = 'home';
    //   this.router.navigate([`${userType}`]);
    // }
  //   this.shaerdService.getAllShopByShop('3').subscribe((res) => {
  //     console.log('LOGGGG LISTSHOP', res);
  //     this.homeService.$userType = of(res);
  //     this.router.navigate(['/user/dopayment']);
  //   });
  // }

}
