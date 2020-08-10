import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {
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
    this.shaerdService.generateReport().subscribe(data => {
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
