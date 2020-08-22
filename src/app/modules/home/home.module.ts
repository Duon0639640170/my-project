import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HomeDoproductComponent } from './home-doproduct/home-doproduct.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeLoginComponent,
    HomeRegisterComponent,
    HomeDoproductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class HomeModule { }
