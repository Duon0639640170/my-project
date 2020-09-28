import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {
  public reportList: any;
  payment;
  user_id: string;
  shopList = []


  dataCard: { img: string; deteil: string; }[];

  reportForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // init form group
    this.initFormGroup();

    // patch value in response api to form
    this.patchValueForm();

    // initShopSelect
    this.initShopSelect();

  }
  initFormGroup() {
    this.reportForm = this.fb.group({
      shop_id: [''],
      id: [''],
      shop_name: ['', [Validators.required]],
      shop_img: ['', [Validators.required]],
      shop_address: ['', [Validators.required]],
      shop_tel: ['', [Validators.required]],
      bank_account_no: ['', [Validators.required]],
      bank_name: ['', [Validators.required]],
    });
  }
  patchValueForm() {
    // get shop_id in request parameter router
    this.shaerdService.getAllShop().subscribe((res) => {
      console.log('patchValueForm : Response => ', res);
      // patch value to form
      this.reportForm.patchValue({
        shop_id: res.shop_id,
        id: res.id,
        shop_name: res.shop_name,
        shop_img: res.shop_img,
        shop_address: res.shop_address,
        shop_tel: res.shop_tel,
        bank_account_no: res.bank_account_no,
        bank_name: res.bank_name,
      });
      console.log(this.reportForm.value);
    });

  }

  initShopSelect() {
    this.shaerdService.getAllShop().subscribe((res) => {
      debugger
      this.shopList = res;
    });
  }

  submitForm() {
    this.shaerdService.generateAdminReport().subscribe(data => {
      if (data != null) {
        this.openFile(data);
      } else {
        alert('fail');
      }

    });
  }

  openFile(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }



}
