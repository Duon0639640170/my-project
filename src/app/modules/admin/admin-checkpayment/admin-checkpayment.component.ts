import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-checkpayment',
  templateUrl: './admin-checkpayment.component.html',
  styleUrls: ['./admin-checkpayment.component.css']
})
export class AdminCheckpaymentComponent implements OnInit {
  checkpaymentList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  editpayment: any;
  pm_id: any
  pm_img: string = ''
  paymentList = [];


  dataCard: { img: string; deteil: string; }[];


  checkpaymentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {

    // init form group
    this.initFormGroup();

    // patch value in response api to form
    this.patchValueForm();

    // initShopSelect
    this.initPaymentSelect();

  }

  getUrlImg(): string {
    return this.API_URL_IMG + this.pm_img
  }

  initFormGroup() {
    this.checkpaymentForm = this.fb.group({
      id: [''],
      pm_id: [''],
      pm_img: [''],
      pm_no: [''],
      pm_totalpric: [''],
      pm_date: [''],
      tracking_no: [''],
      order_ref: [''],
      dr_adress: [''],
      dr_status: ['', [Validators.required]],
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
      this.checkpaymentForm.patchValue({
        id: res.id,
        pm_totalpric: res.pm_totalpric,
        pm_date: this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
        pm_id: res.pm_id,
        pm_img: res.pm_img,
        pm_no: res.pm_no,
        tracking_no: res.tracking_no,
        order_ref: res.order_ref,
        dr_adress: res.dr_adress,
        dr_status: res.dr_status,
        pm_status: res.pm_status
      });

      this.pm_img = res.pm_img;
    });
  }

  initPaymentSelect() {
    this.shaerdService.getAllPayment().subscribe((res) => {
      this.paymentList = res;
    });

  }

  changShopSelected(value: any) {
    console.log('changPaymentSelected : value ==> ' + value)
    this.checkpaymentForm.patchValue({
      shop_id: value
    });
  }

  get form() { return this.checkpaymentForm.controls; }

  // save
  submitForm() {
    // debugger
    // case notfound in condition
    if (this.checkpaymentForm.invalid) {
      return false;

    } else { // case success
      console.log(this.checkpaymentForm.value);
      console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.checkpaymentForm.value);
      this.router.navigate(['/admin/payment']);
      // register
      // const dataCheckpaymentForm = {
      //   id: this.checkpaymentForm.value.id,
      //   pm_date: this.checkpaymentForm.value.pm_date,
      //   pm_id: '',
      //   pm_img: '',
      //   pm_no: '',
      //   pm_status: this.checkpaymentForm.value.pm_status,
      //   pm_totalpric: this.checkpaymentForm.value.pm_totalpric,
      //   tracking_no: this.checkpaymentForm.value.tracking_no
      // };

      // this.checkpaymentForm.patchValue({
      //   id: res.id,
      //   pm_totalpric: res.pm_totalpric,
      //   pm_date: res.pm_date,
      //   tracking_no: res.tracking_no,
      //   pm_status: res.pm_status
      // });

      this.shaerdService.updatePayment(this.checkpaymentForm.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
      });
    }
  }
}
