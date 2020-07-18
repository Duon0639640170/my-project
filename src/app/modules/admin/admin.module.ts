import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminShopComponent } from './admin-shop/admin-shop.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminPaymentComponent } from './admin-payment/admin-payment.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminProfileComponent,
    AdminShopComponent,
    AdminProductComponent,
    AdminPaymentComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
