import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-upparcel',
  templateUrl: './admin-upparcel.component.html',
  styleUrls: ['./admin-upparcel.component.css']
})
export class AdminUpparcelComponent implements OnInit {
  checkpaymentList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  editpayment: any;
  pm_id: any
  pm_img: string = ''
  paymentList = [];


  dataCard: { img: string; deteil: string; }[];


  upparcelForm: FormGroup;

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
    this.upparcelForm = this.fb.group({
      id: [''],
      pm_id: [''],
      pm_img: [''],
      pm_no: [''],
      pm_totalpric: [''],
      pm_date: [''],
      tracking_no: ['',[Validators.required]],
      pm_status: [''],

    });
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    this.pm_id = this.activatedroute.snapshot.paramMap.get("pm_id");
    console.log('patchValueForm : pm_id => ', this.pm_id);

    await this.shaerdService.getPaymentByShop(this.pm_id).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);

      // patch value to form
      this.upparcelForm.patchValue({
        id: res.id,
        pm_totalpric: res.pm_totalpric,
        pm_date: res.datePipe,
        pm_id: res.pm_id,
        pm_img: res.pm_img,
        pm_no: res.pm_no,
        tracking_no: res.tracking_no,
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
    this.upparcelForm.patchValue({
      shop_id: value
    });
  }

  get form() { return this.upparcelForm.controls; }

  // save
  submitForm() {
    // debugger
    // case notfound in condition
    if (this.upparcelForm.invalid) {
      return false;

    } else { // case success
      console.log(this.upparcelForm.value);
      console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.upparcelForm.value);
      this.router.navigate(['/admin/parcel']);
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

      this.shaerdService.updatePayment(this.upparcelForm.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
      });
    }
  }
}

