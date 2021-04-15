import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-account-sttings',
  templateUrl: './account-sttings.component.html',
  styles: [
  ]
})
export class AccountSttingsComponent implements OnInit {
  
  
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string){
    this.settingsService.changeTheme(theme); // cuando cambio el tema mando a cambiar la intruccion de mi servicio
    //console.log(url)
  }



}
