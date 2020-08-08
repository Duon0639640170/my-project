import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-parcel',
  templateUrl: './admin-parcel.component.html',
  styleUrls: ['./admin-parcel.component.css']
})
export class AdminParcelComponent implements OnInit {
  public dataList: Array<any>;
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
      this.dataList = data
    });
  }



  deleteData(data) {
    console.log('LOG FN() delete >>::', data);
  }



  // onEdit(data) {
  //   this.shaerdService.getPaymentByShop(data.pm_id).subscribe((res) => {
  //     console.log('LOGGGG LISTSHOP', res);
  //     this.payment = res;
  //     this.router.navigate(['/user/editpayment']);
  //   });
  // }
}
