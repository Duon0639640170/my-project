
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserEditprofileComponent } from './user-editprofile/user-editprofile.component';
import { UserEditpaymentComponent } from './user-editpayment/user-editpayment.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { UserDoorderComponent } from './user-doorder/user-doorder.component';
import { UserDoshopComponent } from './user-doshop/user-doshop.component';
import { UserEditshopComponent } from './user-editshop/user-editshop.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


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
    UserOrderComponent,
    UserDoorderComponent,
    UserDoshopComponent,
    UserEditshopComponent,
  ],

  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
  ]
})
export class UserModule { }
