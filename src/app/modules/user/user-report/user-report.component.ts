import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {
  public paymentList: Array<any>;
  payment;
  page: any;
  term: string;

  dataCard: { img: string; deteil: string; }[];

  reportForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    // private activatedroute: ActivatedRoute,
    // private userService: UserService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.reportForm = this.fb.group({
      dateFrom: ['', [Validators.required]],
      dateTo: ['', [Validators.required]],
    });
  }

  submitForm() {
    // get userId for get Shop id in shop API
    const userId = localStorage.getItem('shop');
    // get Shop id in Shop api
    this.shaerdService.getShopByUserId(userId).subscribe(response => {
      if (response) {
        const shop_id = response.shop_id;
        const dateFrom = this.reportForm.value.dateFrom;
        const dateTo = this.reportForm.value.dateTo;
        // call order report
        this.shaerdService.generateOrderReport(shop_id, dateFrom, dateTo).subscribe(data => {
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