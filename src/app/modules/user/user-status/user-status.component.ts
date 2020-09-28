import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {
  statusForm: FormGroup;
  fileNameShow: any;
  buildshopForm: FormGroup;
  user_id: string;
  shop: any;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router
  ) { }
  ngOnInit(): void {
    
    this.patchValueForm();

    this.fileNameShow  = 'Upload file Name';

    const userId = localStorage.getItem('shop');
    console.log('USER ID ::::: ' + userId);
    this.statusForm = this.fb.group({
      pd_id: [''],
      type_id: [''],
      shop_id: [''],
      pd_img: ['', [Validators.required]],
      pd_name: ['', [Validators.required]],
      shop_address: ['', [Validators.required]],
      shop_tel: ['', [Validators.required]],
      pd_price: ['', [Validators.required]],
      pd_number: ['', [Validators.required]],
      pd_details: ['', [Validators.required]],
    });

  }

  patchValueForm() {
    debugger;
    this.user_id = localStorage.getItem('shop');
    console.log('patchValueForm : shop => ', this.user_id);
    this.shaerdService.getShopByUserId(this.user_id).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);
      // patch value to form
      this.statusForm.patchValue({
        pd_id: res.pd_id,
        type_id: res.type_id,
        shop_id: res.shop_id,
        pd_img: res.pd_img,
        pd_name: res.pd_name,
        shop_address: res.shop_address,
        shop_tel: res.shop_tel,
        pd_price: res.pd_price,
        pd_number: res.pd_number,
        pd_details: res.pd_details,
      });
      console.log(this.statusForm.value);

      this.shop = res;
    });
    // });
  }

  // save
  submitForm() {
    //debugger;
    // case notfound in condition
    console.log('LOG DATA FN() ON invalid >>>submitForm valuevalue<<<::', this.statusForm.value);
    if (this.statusForm.invalid) {
      return false;

  } else { // case success
    this.statusForm.patchValue({
      shop_id: this.shop.shop_id,
    });

    console.log(this.statusForm.value);
    console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.statusForm.value);
    this.router.navigate(['/user/shopme']);
    // register
    this.shaerdService.saveProduct(this.statusForm.value).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      window.location.reload();
    });
    }
  }
 
  uploadImage(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fileNameShow = file.name;
        this.statusForm.patchValue({
          pd_img: file.name
        });

        // for upload
        const formData = new FormData();
        formData.append('file', file);
        this.shaerdService.uploadImage(formData).subscribe(res => {
          alert('UploadFile :: ' + res);
        });

      };
    }
  }

  initTypeSelect(data) {
    this.shaerdService.getTypeByTypeId(data.type_id).subscribe((res) => {
      this.statusForm = res;

    });

  }

}
