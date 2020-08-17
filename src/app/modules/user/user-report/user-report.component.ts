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
    // debugger
    this.shaerdService.orderReport('').subscribe(data => {
      if (data != null) {
        this.openFile(data);
      } else {
        alert('fail')
      }

    });
  }

  openFile(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }


}