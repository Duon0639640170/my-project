import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { HomeDoproductComponent } from './home-doproduct/home-doproduct.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: HomeLoginComponent },
    { path: 'register', component: HomeRegisterComponent },
    { path: 'doproduct/:pd_id', component: HomeDoproductComponent },
    { path: 'homepage', component: HomePageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class HomeRoutingModule { }
