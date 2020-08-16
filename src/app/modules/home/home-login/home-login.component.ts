import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { HomeService } from 'src/app/shared/service/home.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  loading = false;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {
    this.loading = true;
    if (this.loginForm.invalid) {
      this.loading = false;
      return false;
    } else {
      this.homeService.authentication(this.loginForm.value);
      setTimeout(() => {
        this.loading = false;
        this.loginForm.reset();
      }, 3000);
    }
  }

  get form() { return this.loginForm.controls; }
}
