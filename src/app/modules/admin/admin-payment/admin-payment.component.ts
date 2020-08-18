import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {
  paymentList: Array<any>;
  payment;
  page: any;
  term: string;
  
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
      this.router.navigate(['/admin/checkpayment']);
    });
  }

}
