import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-editproduct',
  templateUrl: './user-editproduct.component.html',
  styleUrls: ['./user-editproduct.component.css']
})
export class UserEditproductComponent implements OnInit {
  productList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  product: any;
  pd_id: any
  pd_img: string = ''
  shopList = []

  dataCard: { img: string; deteil: string; }[];


  editproductForm: FormGroup;

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
    return this.API_URL_IMG + this.pd_img
  }

  initFormGroup() {
    this.editproductForm = this.fb.group({
      pd_id: [''],
      type_id: [''],
      pd_img: ['', [Validators.required]],
      shop_id: [''],
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
      this.editproductForm.patchValue({
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
    this.editproductForm.patchValue({
      shop_id: value
    });
  }

  get form() { return this.editproductForm.controls; }

  // save
  submitForm() {
    // debugger
    // case notfound in condition
    if (this.editproductForm.invalid) {
      return false;

    } else { // case success
      console.log(this.editproductForm.value);
      console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.editproductForm.value);
      this.router.navigate(['/user/shopme']);
      // register
      this.shaerdService.updateProduct(this.editproductForm.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
      });
    }
  }
}
