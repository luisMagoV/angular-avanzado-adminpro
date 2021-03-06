import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { CommonModule } from '@angular/common';



import {  FormsModule } from '@angular/forms'
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';


import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSttingsComponent } from './account-sttings/account-sttings.component';









@NgModule({
  declarations: [
    ProgressComponent,  
    Graficas1Component,
    PagesComponent,
    DashboardComponent,
    AccountSttingsComponent
    
  ],
  exports:[
    ProgressComponent,  
    Graficas1Component,
    PagesComponent,
    DashboardComponent,
    AccountSttingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ComponentsModule 
    
  ]
})
export class PagesModule { }
