import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserBuildshpComponent } from './user-buildshp/user-buildshp.component';
import { UserShopmeComponent } from './user-shopme/user-shopme.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { UserEditproductComponent } from './user-editproduct/user-editproduct.component';
import { UserHomeshopComponent } from './user-homeshop/user-homeshop.component';
import { UserDoproductComponent } from './user-doproduct/user-doproduct.component';

const routes: Routes = [
    { path: '', component: UserHomeComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: 'home', component: UserHomeComponent },
    { path: 'buildshop', component: UserBuildshpComponent },
    { path: 'shopme', component: UserShopmeComponent },
    { path: 'status', component: UserStatusComponent },
    { path: 'editproduct', component: UserEditproductComponent },
    { path: 'homeshop', component: UserHomeshopComponent },
    { path: 'doproduct', component: UserDoproductComponent },
    
    
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class UserRoutingModule { }
