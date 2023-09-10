import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() isPortuguese: boolean = false;

  constructor() { }

  ngOnInit() {}

  downloadCv() {
    window.open('https://drive.google.com/file/d/1GAMqqcGVywmfpA_Ko5p664G4AsFRq9OX/view?usp=drive_link'); 
  }

  sendEmail() {
    window.open('mailto:rony.alvessobral@hotmail.com.br');
  }
}
