import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';

@Component({
  selector: 'app-home-register',
  templateUrl: './home-register.component.html',
  styleUrls: ['./home-register.component.css']
})
export class HomeRegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shaerdService: ShaerdService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(4)]],
      last_name: ['', [Validators.required, Validators.minLength(4)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required]],
      tel: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['', Validators.required]
    });

  }

  // save
  submitForm() {
    // case notfound in condition
    if (this.registerForm.invalid) {
      return false;

    } else { // case success
      console.log(this.registerForm.value);
      console.log('LOG DATA FN() >>>submitForm<<<::', this.registerForm.value);
      // register
      this.shaerdService.register(this.registerForm.value).subscribe(
        (error) => console.log(error)
      );
    }
  }

  reset
  resetForm() {
    this.registerForm.reset();
  }

  get form() { return this.registerForm.controls; }

  saveOrder() {
    const data = {
      "id": 0,
      "order_date": "111",
      "order_id": 333,
      "order_name": "2222",
      "order_number": 444,
      "pd_id": 555,
      "shop_id": 0
    }
    console.log('LOG DATA FN() >>>saveOrder<<<::', data);

    this.shaerdService.saveProduct(data).subscribe(
      (error) => console.log(error)
    );
  }

}
