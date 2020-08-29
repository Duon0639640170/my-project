import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-tracking',
  templateUrl: './user-tracking.component.html',
  styleUrls: ['./user-tracking.component.css']
})
export class UserTrackingComponent implements OnInit {
  paymentList: Array<any>;
  payment;
  page: any;
  term: string;
  status = '1';
  paymentstatus = 'N';
  dataCard: { img: string; deteil: string; }[];
  constructor(
    private shaerdService: ShaerdService,
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
      this.router.navigate(['/user/doparcel']);
    });
  }

}
