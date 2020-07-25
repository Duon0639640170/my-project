import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { HomeService } from './shared/service/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userType;
  userName;
  constructor(
    private homeService: HomeService,
    private router: Router
  ) {
    homeService.$userType.subscribe(data => {
      console.log('LOGGGG >>> :: userType ::', data);
      this.userType = data;
    });
  }

  ngOnInit(): void {
    this.userName = 'จอย';
    this.homeService.$userType = of('home');
  }

  logout() {
    const userType = 'home';
    this.homeService.$userType = of(userType);
    this.router.navigate([`${userType}`]);
  }
}
