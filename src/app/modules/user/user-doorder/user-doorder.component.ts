import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-doorder',
  templateUrl: './user-doorder.component.html',
  styleUrls: ['./user-doorder.component.css']
})
export class UserDoorderComponent implements OnInit {
  [x: string]: any;
  API_URL_IMG = environment.api_url + "/images/"
  order_id: any
  order_img: string = ''
  orderList = []

  dataCard: { img: string; deteil: string; }[];


  doderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // init form group
    this.initFormGroup();

    // patch value in response api to form 
    this.patchValueForm();

    // initShopSelect
    // this.initOrderSelect();

  }

  getUrlImg(): string {
    return this.API_URL_IMG + this.pd_img
  }

  initFormGroup() {
    this.doorderForm = this.fb.group({
      order_id: [''],
      id: ['', [Validators.required]],
      shop_id: [''],
      pd_id: ['', [Validators.required]],
      order_name: [''],
      order_number: ['', [Validators.required]],
      order_date: ['', [Validators.required]],
      pd_name: ['', [Validators.required]],
      pd_img: ['', [Validators.required]],


    });
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    this.pd_id = this.activatedroute.snapshot.paramMap.get("order_id");
    console.log('patchValueForm : order_id => ', this.pd_id);
    await this.shaerdService.getOrderByOrder(this.pd_id).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);
      // patch value to form
      this.doorderForm.patchValue({
        order_id: res.order_id,
        id: res.id,
        shop_id: res.shop_id,
        pd_id: res.pd_id,
        order_name: res.order_name,
        order_number: res.order_number,
        order_date: res.order_date,
        pd_name: res.productType.pd_name,
        pd_img: res.productType.pd_img,
      });
      this.pd_img = res.productType.pd_img;
    });
  }

  initShopSelect() {
    this.shaerdService.getAllOrder().subscribe((res) => {
      this.orderList = res;
    });

  }

  changOrderSelected(value: any) {
    console.log('changShopSelected : value ==> ' + value)
    this.doorderForm.patchValue({
      id: value
    });
  }

  get form() { return this.doorderForm.controls; }


}
