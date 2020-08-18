import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminUpparcelComponent } from './admin-upparcel/admin-upparcel.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminProfileComponent,
    AdminShopComponent,
    AdminProductComponent,
    AdminPaymentComponent,
    AdminParcelComponent,
    AdminReportComponent,
    AdminDoproductComponent,
    AdminSlipComponent,
    AdminEditprofileComponent,
    AdminCheckpaymentComponent,
    AdminUpparcelComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AdminModule { }
