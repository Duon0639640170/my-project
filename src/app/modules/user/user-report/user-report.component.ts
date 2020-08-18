import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {
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
  }

  submitForm() {


    // get userId for get Shop id in shop API
    const userId = localStorage.getItem('shop');

    // get Shop id in Shop api
    this.shaerdService.getShopByUserId(userId).subscribe(response => {
      if (response) {
        const shop_id = response.shop_id;
        // call order report
        this.shaerdService.orderReport(shop_id).subscribe(data => {
          if (data != null) {
            this.openFile(data);
          } else {
            alert('Open PDF Fail Data is Null!');
          }
        });

      } else {
        alert('Print Report Fail in Step Get Shop Id!');
      }
    });
  }

  openFile(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }


}