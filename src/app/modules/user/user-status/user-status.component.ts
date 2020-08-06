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

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.statusForm = this.fb.group({
      pd_img: ['', [Validators.required]],
      pd_name: ['', [Validators.required]],
      shop_address: ['', [Validators.required]],
      shop_tel: ['', [Validators.required]],
      pd_price: ['', [Validators.required]],
      pd_number: ['', [Validators.required]],
      pd_details: ['', [Validators.required]],

    });

  }

  // save
  submitForm() {
    // case notfound in condition
    if (this.statusForm.invalid) {
      return false;

  } else { // case success
    console.log(this.statusForm.value);
    console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.statusForm.value);
    this.router.navigate(['/user/homeshop']);
    // register
    this.shaerdService.saveProduct(this.statusForm.value).subscribe((res) => {
      console.log('LOGGGG LISTSHOP', res);
      window.location.reload();
    });
    }
  }
 

}
