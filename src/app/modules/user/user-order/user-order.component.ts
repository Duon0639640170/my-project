import { Component, OnInit } from '@angular/core';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {
  public orderList: Array<any>;
  order;
  page: any;
  term: string;

  dataCard: { img: string; deteil: string; }[];

  constructor(
    // private fb: FormBuilder,
    private shaerdService: ShaerdService,
    // private activatedroute: ActivatedRoute,
    // private userService: UserService,
    private router: Router
  ) { }

 
  ngOnInit(): void {
    this.getorderList();
  }

  getorderList() {
    this.shaerdService.getAllOrder().subscribe((data) => {
      console.log('LOGGGG LISTSHOP', data);
      this.orderList = data
    });
  }



  deleteData(data) {
    console.log('LOG FN() delete >>::', data);
  }



  onEdit(data) {
    this.shaerdService.getOrderByOrder(data.order_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.order = res;
      this.router.navigate(['/user/doorder']);
    });
  }

}
