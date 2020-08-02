import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dopayment',
  templateUrl: './user-dopayment.component.html',
  styleUrls: ['./user-dopayment.component.css']
})
export class UserDopaymentComponent implements OnInit {
  paymentList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/";
  payment: any;
  pm_id: any;
  pm_img: string = '';
  shopList = [];

  dataCard: { img: string; deteil: string; }[];


  dopaymentForm: FormGroup;

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
    this.initShopSelect();

  }

  getUrlImg(): string {
    return this.API_URL_IMG + this.pm_img
  }

  initFormGroup() {
    this.dopaymentForm = this.fb.group({
      pm_id: [''],
      id: ['', [Validators.required]],
      pm_totalpric: ['', [Validators.required]],
      pm_img: ['', [Validators.required]],
      pm_date: ['', [Validators.required]],
      pm_status: ['', [Validators.required]],
    });
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    this.pm_id = this.activatedroute.snapshot.paramMap.get("pm_id");
    console.log('patchValueForm : pm_id => ', this.pm_id);

    await this.shaerdService.getPaymentByShop(this.pm_id).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);

      // patch value to form
      this.dopaymentForm.patchValue({
        pm_id: res.pm_id,
        id: res.id,
        pm_totalpric: res.pm_totalpric,
        pm_img: res.pm_img,
        pm_date: res.pm_date,
        pm_status: res.pm_status,
      });

      this.pm_img = res.pm_img;
    });

  }

  initShopSelect() {
    this.shaerdService.getAllPayment().subscribe((res) => {
      this.paymentList = res;
    });

  }

  changPaymentSelected(value: any) {
    console.log('changPaymentSelected : value ==> ' + value);
    this.dopaymentForm.patchValue({
      shop_id: value
    });
  }
  submitForm() {
    debugger
    // case notfound in condition
    if (this.dopaymentForm.invalid) {
      return false;

    } else { // case success
      console.log(this.dopaymentForm.value);
      console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.dopaymentForm.value);
      this.router.navigate(['/user/payment']);
      // register
      this.shaerdService.updatePayment(this.dopaymentForm.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
      });
    }
  }

  get form() { return this.dopaymentForm.controls; }

}
