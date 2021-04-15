import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linktheme = document.querySelector('#theme');

  constructor() {
    console.log('servicios setting');
    
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css'
    this.linktheme?.setAttribute('href', url);
    //localStorage.setItem('theme', url);
    // ./assets/css/colors/default-dark.css
   }

   changeTheme(theme: string){

    const url = `./assets/css/colors/${theme}.css`;
    this.linktheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();

  }

  
  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    
      links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme'); // obtengo el valor del atributo personalizado
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`; // si cindice con currentTheme se le coloca la clase workin
      const currentTheme = this.linktheme?.getAttribute('href');

      if(btnThemeUrl == currentTheme){
        elem.classList.add('working');

      }
    });
    //console.log(this.links)
  }
}
