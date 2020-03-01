import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Parent1Component } from './pages/parent1/parent1.component';
import { Parent2Component } from './pages/parent2/parent2.component';
import {AuthGuard} from './guard/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProdetailsComponent } from './pages/prodetails/prodetails.component';
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'about-us',component:AboutComponent},
  {path:'Contact', component:ContactComponent,canActivate:[AuthGuard]},
  {path:'ptoc', component:Parent1Component},
  {path:'ctop', component:Parent2Component},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'prodetails/:cn',component:ProdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
