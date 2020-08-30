import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-doparcel',
  templateUrl: './user-doparcel.component.html',
  styleUrls: ['./user-doparcel.component.css']
})
export class UserDoparcelComponent implements OnInit {
  productList: Array<any>;
  product: any;
  pm_id: any



  dataCard: { img: string; deteil: string; }[];


  addtrackingForm: FormGroup;

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
  }

  initFormGroup() {
    this.addtrackingForm = this.fb.group({
      id:[''],
      pm_id: [''],
      pm_img: [''],
      pm_no: [''],
      pm_totalpric: [''],
      pm_date: [''],
      tracking_no: ['', [Validators.required]],
      order_ref: [''],
      dr_adress: [''],
      dr_status: [''],
      pm_status: [''],
     
    });
  }

  async patchValueForm() {
    // get pd_id in request parameter router
    this.pm_id = this.activatedroute.snapshot.paramMap.get("pm_id");
    console.log('patchValueForm : pm_id => ', this.pm_id);
    await this.shaerdService.getPaymentByShop(this.pm_id).subscribe((res) => {
      console.log('patchValueForm : Response => ', res);
     
      // patch value to form
      this.addtrackingForm.patchValue({
        id: res.id,
        pm_totalpric: res.pm_totalpric,
        pm_date: res.pm_date,
        pm_id: res.pm_id,
        pm_img: res.pm_img,
        pm_no: res.pm_no,
        tracking_no: res.tracking_no,
        order_ref: res.order_ref,
        dr_adress: res.dr_adress,
        dr_status: res.dr_status,
        pm_status: res.pm_status
      });
    });
  }


  get form() { return this.addtrackingForm.controls; }

  // save
  submitForm() {
    // debugger
    // case notfound in condition
    if (this.addtrackingForm.invalid) {
      return false;

    } else { // case success
      this.addtrackingForm.patchValue({dr_status: 'D'});
      console.log(this.addtrackingForm.value);
      console.log('LOG DATA FN() ON invalid >>>submitForm<<<::', this.addtrackingForm.value);
      // register
      this.shaerdService.updatePayment(this.addtrackingForm.value).subscribe((res) => {
        console.log('LOGGGG LISTSHOP', res);
        this.router.navigate(['/user/tracking']);
      });
    }
  }
}
