import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-contents',
  templateUrl: './profile-contents.component.html',
  styleUrls: ['./profile-contents.component.scss']
})
export class ProfileContentsComponent implements OnInit {
  
  @Input() isPortuguese: boolean = false;

  isActiveProtifolio: boolean = true;
  isActiveSkills: boolean = false;

  btnPortifolioStyle = "";
  btnSkillStyle="";

  constructor() { }

  ngOnInit() {
  }

  activePortifolio() {
    this.isActiveProtifolio = true;
    this.isActiveSkills = false;
  }

  activeSkills() {
    this.isActiveSkills = true;
    this.isActiveProtifolio = false;
  }

}
