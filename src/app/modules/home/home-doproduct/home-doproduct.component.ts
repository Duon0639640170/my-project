import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-doproduct',
  templateUrl: './home-doproduct.component.html',
  styleUrls: ['./home-doproduct.component.css']
})
export class HomeDoproductComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buiulForm();
  }
  
  private buiulForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      aaaa: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  
}
