import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {
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
      this.paymentList = data;
    });
  }

  onEdit(data) {
    this.shaerdService.getPaymentByShop(data.pm_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.payment = res;
      this.router.navigate(['/admin/checkpayment']);
    });
  }

  // deleteData(data) {
  //   console.log('LOG FN() delete >>::', data);
  // }



  // onEdit(data) {
  //   this.shaerdService.getPaymentByShop(data.pm_id).subscribe((res) => {
  //     console.log('LOGGGG LISTSHOP', res);
  //     this.payment = res;
  //     this.router.navigate(['/user/editpayment']);
  //   });
  // }
}
