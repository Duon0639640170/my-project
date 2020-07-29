import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';

@Component({
  selector: 'app-user-buildshp',
  templateUrl: './user-buildshp.component.html',
  styleUrls: ['./user-buildshp.component.css']
})
export class UserBuildshpComponent implements OnInit {
  buildshpForm: FormGroup;

  constructor(private fb: FormBuilder,
    private shaerdService: ShaerdService
  ) { }
  ngOnInit(): void {
    this.buildshpForm = this.fb.group({
      // shop_img: ['', [Validators.required,]],
      // shop_name: ['', [Validators.required,]],
      // shop_address: ['', [Validators.required,]],
      // shop_tel: ['', [Validators.required,]],
      // bank_name: ['', [Validators.required]],
      bank_account_no: ['', [Validators.required,]],

    });

  }

  // save
  submitForm() {
    // case notfound in condition
    if (this.buildshpForm.invalid) {
      return false;

    } else { // case success
      console.log(this.buildshpForm.value);
      console.log('LOG DATA FN() >>>submitForm<<<::', this.buildshpForm.value);
      // register
      this.shaerdService.saveshop(this.buildshpForm.value).subscribe(
        (error) => console.log(error)
      );
    }
  }


  // get form() { return this.buildshpForm.controls; }

  // saveOrder() {
  //   const data = {
  //     "id": 0,
  //     "shop_img": "",
  //     "shop_name": "",
  //     "shop_address": "",
  //     "shop_tel": "",
  //     "bank_name": "",
  //     "bank_account_no": ""
  //   }
  //   console.log('LOG DATA FN() >>>saveOrder<<<::', data);

  //   this.shaerdService.saveshop(data).subscribe(
  //     (error) => console.log(error)
  //   );
  // }


}
