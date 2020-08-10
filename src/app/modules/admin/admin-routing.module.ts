import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminShopComponent } from './admin-shop/admin-shop.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';
import { AdminParcelComponent } from './admin-parcel/admin-parcel.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminDoproductComponent } from './admin-doproduct/admin-doproduct.component';
import { AdminSlipComponent } from './admin-slip/admin-slip.component';
import { AdminEditprofileComponent } from './admin-editprofile/admin-editprofile.component';
import { AdminCheckpaymentComponent } from './admin-checkpayment/admin-checkpayment.component';
import { AdminUpparcelComponent } from './admin-upparcel/admin-upparcel.component';

const routes: Routes = [
    { path: '', component: AdminHomeComponent },
    { path: 'profile/:id', component: AdminProfileComponent },
    { path: 'shop', component: AdminShopComponent },
    { path: 'product', component: AdminProductComponent },
    { path: 'payment', component: AdminPaymentComponent },
    { path: 'parcel', component: AdminParcelComponent },
    { path: 'report', component: AdminReportComponent },
    { path: 'doproduct', component: AdminDoproductComponent },
    { path: 'slip', component: AdminSlipComponent },
    { path: 'editprofile', component: AdminEditprofileComponent },
    { path: 'checkpayment/:pm_id', component: AdminCheckpaymentComponent },
    { path: 'upparcel/:pm_id', component: AdminUpparcelComponent },
    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule { }
