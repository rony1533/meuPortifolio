import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  isLight: boolean = false;
  isPortuguese: boolean = false;

  ngOnInit(): void {
    this.changeMode();
  }

  constructor() { }

  changeMode() {
    document.body.classList.toggle('dark-theme')
    this.isLight =!this.isLight;
  }

  changeLanguage(param: string) {
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
