
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserBuildshopComponent } from './user-buildshop/user-buildshop.component';
import { UserShopmeComponent } from './user-shopme/user-shopme.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { UserEditproductComponent } from './user-editproduct/user-editproduct.component';
import { UserHomeshopComponent } from './user-homeshop/user-homeshop.component';
import { UserDoproductComponent } from './user-doproduct/user-doproduct.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserDoparcelComponent } from './user-doparcel/user-doparcel.component';
import { UserReportComponent } from './user-report/user-report.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditprofileComponent } from './user-editprofile/user-editprofile.component';
import { UserEditpaymentComponent } from './user-editpayment/user-editpayment.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserProfileComponent,
    UserBuildshopComponent,
    UserShopmeComponent,
    UserStatusComponent,
    UserEditproductComponent,
    UserHomeshopComponent,
    UserDoproductComponent,
    UserPaymentComponent,
    UserDoparcelComponent,
    UserReportComponent,
    UserEditprofileComponent,
    UserEditpaymentComponent,
  ],

  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
