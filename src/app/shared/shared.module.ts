import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ],exports:[
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
