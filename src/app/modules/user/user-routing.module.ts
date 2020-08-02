import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserBuildshopComponent } from './user-buildshop/user-buildshop.component';
import { UserShopmeComponent } from './user-shopme/user-shopme.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { UserEditproductComponent } from './user-editproduct/user-editproduct.component';
import { UserHomeshopComponent } from './user-homeshop/user-homeshop.component';
import { UserDoproductComponent } from './user-doproduct/user-doproduct.component';
import { UserPaymentComponent } from './user-payment/user-payment.component';
import { UserParcelComponent } from './user-parcel/user-parcel.component';
import { UserDoparcelComponent } from './user-doparcel/user-doparcel.component';
import { UserReportComponent } from './user-report/user-report.component';
import { UserDopaymentComponent } from './user-dopayment/user-dopayment.component';

const routes: Routes = [
    { path: '', component: UserHomeComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'home', component: UserHomeComponent },
    { path: 'buildshop', component: UserBuildshopComponent },
    { path: 'shopme', component: UserShopmeComponent },
    { path: 'status', component: UserStatusComponent },
    { path: 'editproduct/:pd_id', component: UserEditproductComponent },
    { path: 'homeshop', component: UserHomeshopComponent },
    { path: 'doproduct', component: UserDoproductComponent },
    { path: 'payment', component: UserPaymentComponent },
    { path: 'parcel', component: UserParcelComponent },
    { path: 'doparcel', component: UserDoparcelComponent },
    { path: 'report', component: UserReportComponent },
    { path: 'dopayment/:pm_id', component: UserDopaymentComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class UserRoutingModule { }
