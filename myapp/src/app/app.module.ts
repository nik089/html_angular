import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { MainComponent } from './pages/main/main.component';
import { SliderComponent } from './pages/slider/slider.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactComponent } from './pages/contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { MypipePipe } from './mypipe.pipe';
import { MydirectiveDirective } from './mydirective.directive';
import { StrdirectiveDirective } from './strdirective.directive';
import { Parent1Component } from './pages/parent1/parent1.component';
import { Parent2Component } from './pages/parent2/parent2.component';
import { Child1Component } from './pages/child1/child1.component';
import { Child2Component } from './pages/child2/child2.component';
import { AuthGuard} from './guard/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdetailsComponent } from './pages/prodetails/prodetails.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    SliderComponent,
    ContactComponent,
    MypipePipe,
    MydirectiveDirective,
    StrdirectiveDirective,
    Parent1Component,
    Parent2Component,
    Child1Component,
    Child2Component,
    ProdetailsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
