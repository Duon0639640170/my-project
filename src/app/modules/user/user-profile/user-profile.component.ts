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
  [x: string]: any;
  profileList: Array<any>;
  API_URL_IMG = environment.api_url + "/images/"
  username: any;
  id: any
 
  userList = [];

 


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
    this.initShopSelect();

  }


  initFormGroup() {
    this.profileForm = this.fb.group({
      id:[''],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  async patchValueForm() {
    // get id in request parameter router
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    console.log('patchValueForm : id => ', this.id);

    await this.shaerdService.getUser(this.username).subscribe((res) => {
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
        gender: res.gender
      });

      // this.pd_img = res.pd_img;
    });

  }
  onEdit(data) {
    this.shaerdService.getUser(this.username).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      this.product = res;
      this.router.navigate(['/user/editprofile']);
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

  get form() { return this.profileForm.controls; }

}
