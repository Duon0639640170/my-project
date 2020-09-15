import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-doproduct',
  templateUrl: './user-doproduct.component.html',
  styleUrls: ['./user-doproduct.component.css']
})
export class UserDoproductComponent implements OnInit {
  [x: string]: any;
  productList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  product: any;
  pd_id: any
  pd_img: string = ''
  shopList = []

  dataCard: { img: string; deteil: string; }[];


  doproductForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // init form group
    this.initFormGroup()

    // patch value in response api to form 
    this.patchValueForm();

    // initShopSelect
    this.initShopSelect();

  }

  getUrlImg(): string {
    return this.API_URL_IMG + this.pd_img
  }

  initFormGroup() {
    this.doproductForm = this.fb.group({
      pd_id: [''],
      type_id: [''],
      pd_img: ['', [Validators.required]],
      shop_id: ['', [Validators.required]],
      pd_name: ['', [Validators.required]],
      pd_price: ['', [Validators.required]],
      pd_details: ['', [Validators.required]],
      pd_number: ['', [Validators.required]],
      type_name: ['', [Validators.required]],
    });
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    this.pd_id = this.activatedroute.snapshot.paramMap.get('pd_id');
    console.log('patchValueForm : pd_id => ', this.pd_id);

    await this.shaerdService.getProductByPD_id(this.pd_id).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);
      // patch value to form
      this.doproductForm.patchValue({
        pd_id: res.pd_id,
        type_id: res.type_id,
        pd_img: res.pd_img,
        shop_id: res.shop_id,
        pd_name: res.pd_name,
        pd_price: res.pd_price,
        pd_details: res.pd_details,
        pd_number: res.pd_number,
        type_name: res.productType.type_name
      });

      this.pd_img = res.pd_img;
    });

  }

  initShopSelect() {
    this.shaerdService.getAllShop().subscribe((res) => {
      this.shopList = res;
    });

  }

  changShopSelected(value: any) {
    console.log('changShopSelected : value ==> ' + value)
    this.doproductForm.patchValue({
      shop_id: value
    });
  }

  get form() { return this.doproductForm.controls; }

  onDoproduct(data) {
    this.shaerdService.getProductByPD_id(data.pd_id).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['/user/doproduct']);
    });
  }
  
}
