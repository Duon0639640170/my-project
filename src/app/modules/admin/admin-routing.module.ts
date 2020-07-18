import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminShopComponent } from './admin-shop/admin-shop.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';

const routes: Routes = [
    { path: '', component: AdminHomeComponent },
    { path: 'profile', component: AdminProfileComponent },
    { path: 'shop', component: AdminShopComponent },
    { path: 'product', component: AdminProductComponent },
    { path: 'payment', component: AdminPaymentComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AdminRoutingModule { }
