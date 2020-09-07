import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-editpayment',
  templateUrl: './user-editpayment.component.html',
  styleUrls: ['./user-editpayment.component.css']
})
export class UserEditpaymentComponent implements OnInit {

  API_URL_IMG = environment.api_url + '/images/';
  editpayment: any;
  pm_id: any
  pm_img: string = '';
  paymentList = [];
  paymentstatus = 'N';
  productList = [];


  dataCard: { img: string; deteil: string; }[];


  editpaymentForm: FormGroup;

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
    this.initPaymentSelect();

  }

  getUrlImg(): string {
    return this.API_URL_IMG + this.pm_img;
  }

  initFormGroup() {
    this.editpaymentForm = this.fb.group({
      id: [''],
      full_name: [''],
      pm_id: ['', [Validators.required]],
      pm_img: ['', [Validators.required]],
      pm_no: ['', [Validators.required]],
      pm_totalpric: ['', [Validators.required]],
      pm_date: ['', [Validators.required]],
      tracking_no: ['', [Validators.required]],
      order_ref: ['', [Validators.required]],
      dr_adress: ['', [Validators.required]],
      dr_status: ['', [Validators.required]],
      pm_status: ['', [Validators.required]],
    });
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    this.pm_id = this.activatedroute.snapshot.paramMap.get('pm_id');
    console.log('patchValueForm : pm_id => ', this.pm_id);
    await this.shaerdService.getPaymentByShop(this.pm_id).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);

      // get name using userId
      this.shaerdService.getUserByUserId(res.id).subscribe((data) => {
        console.log('getUserByUserId :: ');
        console.log(data);
        this.editpaymentForm.patchValue({
          full_name: data.first_name + ' ' + data.last_name
        });
      });

      // patch value to form
      this.editpaymentForm.patchValue({
        id: res.id,
        pm_totalpric: res.pm_totalpric,
        pm_date: res.pm_date,
        pm_id: res.pm_id,
        pm_img: res.pm_img,
        pm_no: res.pm_no,
        tracking_no: res.tracking_no,
        order_ref: res.order_ref,
        dr_adress: res.dr_adress,
        dr_status: res.dr_status,
        pm_status: res.pm_status,

      });

      res.orders.map((data: any) => {
        this.shaerdService.getProductByPD_id(data.pd_id).subscribe((resProduct) => {
          this.productList.push(resProduct);
        });
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
    this.editpaymentForm.patchValue({
      shop_id: value
    });
  }

  get form() { return this.editpaymentForm.controls; }

  // save
  submitForm() {
    // debugger
    // case notfound in condition
    if (this.editpaymentForm.invalid) {
      return false;

    } else { // case success
      console.log(this.editpaymentForm.value);
      console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.editpaymentForm.value);
      this.router.navigate(['/user/payment']);
      // register
      this.shaerdService.updatePayment(this.editpaymentForm.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
      });
    }
  }

  private getDataCard() {
    const data = [
      {
        img: '/assets/image/1.jpg',
        deteil: 'ลูฟี่ กัปตันเรือ กลุ่มโจรสลัดหมวกฟาง'
      },
    ];
    this.dataCard = data;
  }
}
