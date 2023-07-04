import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meuPortifolio';
  
  isLight: boolean = false;
  isPortuguese: boolean = false;

  ngOnInit(): void {
    this.changeMode();
  }

  changeMode() {
    document.body.classList.toggle('dark-theme')
    this.isLight =!this.isLight;
  }

  changeLanguage(param: string) {
    console.log(this.isPortuguese);
    
    switch(param) {
      case 'eng':
        this.isPortuguese = false;
        break;
      case 'pt':
        this.isPortuguese = true;
        break;
      default:
        this.isPortuguese = true;
        break;
    }
  }
}
