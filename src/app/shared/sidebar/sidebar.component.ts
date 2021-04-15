import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuitems!: any[];

  constructor(private sidebarServices: SidebarService) {
    this.menuitems = sidebarServices.menu;
    console.log(this.menuitems)
   }


  ngOnInit(): void {
  }

}
