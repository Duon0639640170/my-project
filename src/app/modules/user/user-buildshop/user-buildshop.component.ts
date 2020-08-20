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
    const userId = localStorage.getItem('shop');
    console.log('USER ID ::::: ' + userId);
    this.buildshopForm = this.fb.group({
      id: [userId, [Validators.required]],
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
    console.log('LOG DATA FN() ON invalid >>>submitForm valuevalue<<<::', this.buildshopForm.value);
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

  saveRange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log('LOGGGGGGGGG FILE NAME >>:', file.name);
        console.log('LOGGGGGGGGG DATA saveRange>>:', reader.result);
        // this.buildshopForm.get('shop_img').setValue(reader.result);
        this.buildshopForm.patchValue({
          shop_img: file.name
        });

        // fot upload

      };
    }
  }


}
