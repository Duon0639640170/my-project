import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-editprofile',
  templateUrl: './user-editprofile.component.html',
  styleUrls: ['./user-editprofile.component.css']
})
export class UserEditprofileComponent implements OnInit {
  // productList: Array<any>;
  // API_URL_IMG = environment.api_url + "/images/"
  editprofile: any;
  id: any;
  username: string;


  dataCard: { img: string; deteil: string; }[];


  editprofileForm: FormGroup;

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
    // this.initPaymentSelect();

  }


  initFormGroup() {
    this.editprofileForm = this.fb.group({
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
    // get pd_id in request parameter router
    this.id = this.activatedroute.snapshot.paramMap.get("user");
    console.log('patchValueForm : username => ', this.username);

    await this.shaerdService.getUser(this.username).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);
     
      // patch value to form
      this.editprofileForm.patchValue({
        
        id: res.id,
        first_name: res.first_name,
        last_name: res.last_name,
        username: res.username,
        password: res.password,
        address: res.address,
        tel: res.tel,
        gender: res.gender
      });

     
    });
  }

  // initPaymentSelect() {
  //   this.shaerdService.listUser().subscribe((res) => {
  //     this.userList = res;
  //   });

  // }

  changShopSelected(value: any) {
    console.log('changPaymentSelected : value ==> ' + value)
    this.editprofileForm.patchValue({
      id: value
    });
  }

  get form() { return this.editprofileForm.controls; }

  // save
  submitForm() {
    // debugger
    // case notfound in condition
    if (this.editprofileForm.invalid) {
      return false;

    } else { // case success
      console.log(this.editprofileForm.value);
      console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.editprofileForm.value);
      this.router.navigate(['/admin/profile']);
      // register
      this.shaerdService.update(this.editprofileForm.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
      });
    }
  }
}
