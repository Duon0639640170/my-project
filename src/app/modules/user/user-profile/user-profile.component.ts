import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profileList: Array<any>;
  doshop: any;
  username: string;

  profileForm: FormGroup;

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
    // this.initShopSelect();

  }


  initFormGroup() {
    this.profileForm = this.fb.group({
      id: [''],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  patchValueForm() {
    // get shop_id in request parameter router
    this.username = localStorage.getItem('user');
    console.log('patchValueForm : username => ', this.username);

    this.shaerdService.getUser(this.username).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);

      // patch value to form
      this.profileForm.patchValue({
        id: res.id,
        first_name: res.first_name,
        last_name: res.last_name,
        username: res.username,
        password: res.password,
        address: res.address,
        tel: res.tel,
        gender: res.gender,
      });
      console.log(this.profileForm.value);
    });

  }

  // initShopSelect() {
  //   this.shaerdService.getAllShop().subscribe((res) => {
  //     this.shopList = res;
  //   });

  // }

  // changShopSelected(value: any) {
  //   console.log('changShopSelected : value ==> ' + value)
  //   this.doproductForm.patchValue({
  //     shop_id: value
  //   });
  // }

  submitForm() {
    // debugger
    // case notfound in condition
    if (this.profileForm.invalid) {
      return false;

    } else { // case success
      console.log(this.profileForm.value);
      console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.profileForm.value);
      this.router.navigate(['/user/editprofile']);
      // register
      // this.shaerdService.updateShop(this.profileForm.value).subscribe((res) => {
      //   console.log('LOGGGG LISTSHOP', res);
      // });
    }
  }

  get form() { return this.profileForm.controls; }

}
