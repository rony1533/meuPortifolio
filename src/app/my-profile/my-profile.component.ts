import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth } from '../service/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  isLight: boolean = false;
  isPortuguese: boolean = false;

  constructor(private authService: Auth) {}

  ngOnInit(): void {
    this.authService.authenticateAnonymously();
    this.changeMode();
  }

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
