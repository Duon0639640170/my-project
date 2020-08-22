import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-editshop',
  templateUrl: './user-editshop.component.html',
  styleUrls: ['./user-editshop.component.css']
})
export class UserEditshopComponent implements OnInit {
  editshoptList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  shop: any;
  shop_id: any
  shop_img: string = ''
  shopList = []

  dataCard: { img: string; deteil: string; }[];


  editshopForm: FormGroup;

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
    return this.API_URL_IMG + this.shop_img
  }

  initFormGroup() {
    this.editshopForm = this.fb.group({
      id: [''],
      shop_id: [''],
      shop_name: ['', [Validators.required]],
      shop_img: ['', [Validators.required]],
      shop_address: ['', [Validators.required]],
      shop_tel: ['', [Validators.required]],
      bank_name: ['', [Validators.required]],
      bank_account_no: ['', [Validators.required]],
    });
   
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    const userId =  localStorage.getItem('shop');
    console.log('patchValueForm : userId => ', userId);

    await this.shaerdService.getShopByUserId(userId).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);

      // patch value to form
      this.editshopForm.patchValue({
        id: userId,
        shop_id: res.shop_id,
        shop_name: res.shop_name,
        shop_img: res.shop_img,
        shop_address: res.shop_address,
        shop_tel: res.shop_tel,
        bank_name: res.bank_name,
        bank_account_no: res.bank_account_no,
      });

      this.shop_img = res.shop_img;
    });
  }

  initShopSelect() {
    this.shaerdService.getAllShop().subscribe((res) => {
      this.shopList = res;
    });

  }

  changShopSelected(value: any) {
    console.log('changShopSelected : value ==> ' + value)
    this.editshopForm.patchValue({
      shop_id: value
    });
  }

  get form() { return this.editshopForm.controls; }

  // save
  submitForm() {
    // debugger
    // case notfound in condition
    console.log(this.editshopForm.value);
    if (this.editshopForm.invalid) {
      return false;

    } else { // case success
      console.log(this.editshopForm.value);
      console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.editshopForm.value);
      // register
      this.shaerdService.updateShop(this.editshopForm.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
        if (res !== null){
          alert('Update Success!');
          this.router.navigate(['/user/shopme']);
        } else {
          alert('Update Fail!');
        }
      });
    }
  }


}
