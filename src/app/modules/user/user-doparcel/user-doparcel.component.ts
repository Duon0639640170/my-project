import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-doparcel',
  templateUrl: './user-doparcel.component.html',
  styleUrls: ['./user-doparcel.component.css']
})
export class UserDoparcelComponent implements OnInit {
  public doparcelList: Array<any>;
  doparcel;
  constructor(
    // private userService: UserService
    private shaerdService: ShaerdService,
    private router: Router
  ) {  }

  ngOnInit(): void {
    this.getDoparcelList();
  }

  getDoparcelList() {
    this.shaerdService.getAllPayment().subscribe((data) => {
      console.log('LOGGGG LISTSHOP', data);
      this.doparcelList = data
    });
  }



  // deleteData(data) {
  //   console.log('LOG FN() delete >>::', data);
  // }

  onClickTable(data) {
    console.log('LOG FN() onClickTable >>::', data);
    this.shaerdService.getPaymentByShop(data.pm_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.doparcel = res;
      // this.router.navigate(['/user/dopayment']);
    });



  }
}
