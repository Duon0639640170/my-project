import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-parcel',
  templateUrl: './user-parcel.component.html',
  styleUrls: ['./user-parcel.component.css']
})
export class UserParcelComponent implements OnInit {
  productList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  product: any;
  pm_id: any
  pm_img: string = ''
  userList = []

  dataCard: { img: string; deteil: string; }[];


 parcelForm: FormGroup;

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
    this.patchValueForm()

    // initShopSelect
    this.initUserSelect()

  }

  getUrlImg(): string {
    return this.API_URL_IMG + this.pm_img
  }

  initFormGroup() {
    this.parcelForm = this.fb.group({
      pm_id:[''],
      id: ['', [Validators.required]],
      tracking_no: ['', [Validators.required]],
    });
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    this.pm_id = this.activatedroute.snapshot.paramMap.get("pm_id");
    console.log('patchValueForm : pm_id => ', this.pm_id);

    await this.shaerdService.getPaymentByShop(this.pm_id).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);
     
      // patch value to form
      this.parcelForm.patchValue({
        pm_id: res.pm_id,
        id: res.id,
        tracking_no: res.tracking_no
      });

      this.pm_img = res.pm_img;
    });

  }

  initUserSelect() {
    this.shaerdService.getAllPayment().subscribe((res) => {
      this.userList = res;
    });

  }

  changUserSelected(value: any) {
    console.log('changUserSelected : value ==> ' + value)
    this.parcelForm.patchValue({
      id: value
    });
  }

  get form() { return this.parcelForm.controls; }

  // save
  submitForm() {
    debugger
    // case notfound in condition
    if (this.parcelForm.invalid) {
      return false;

    } else { // case success
      console.log(this.parcelForm.value);
      console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.parcelForm.value);
      this.router.navigate(['/user/doparcel']);
      // register
      this.shaerdService.updatePayment(this.parcelForm.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
      });
    }
  }

}
