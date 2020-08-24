import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShaerdService } from 'src/app/shared/service/shaerd.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from 'src/app/shared/service/home.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
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
