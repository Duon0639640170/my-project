import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-buildshop',
  templateUrl: './user-buildshop.component.html',
  styleUrls: ['./user-buildshop.component.css']
})
export class UserBuildshopComponent implements OnInit {
  buildshopForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.buildshopForm = this.fb.group({
      shop_img: ['', [Validators.required]],
      shop_name: ['', [Validators.required]],
      shop_address: ['', [Validators.required]],
      shop_tel: ['', [Validators.required]],
      bank_name: ['', [Validators.required]],
      bank_account_no: ['', [Validators.required]],

    });

  }

  // save
  submitForm() {
    // case notfound in condition
    if (this.buildshopForm.invalid) {
      return false;

  } else { // case success
    console.log(this.buildshopForm.value);
    console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.buildshopForm.value);
    this.router.navigate(['/user/shopme']);
    // register
    this.shaerdService.saveshop(this.buildshopForm.value).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
    });
    }
  }
 



}
