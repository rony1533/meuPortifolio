import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-skills',
  templateUrl: './profile-skills.component.html',
  styleUrls: ['./profile-skills.component.scss']
})
export class ProfileSkillsComponent implements OnInit {

  @Input() isShowSkills: boolean = false;

  constructor() { }

  ngOnInit() {


    
  }

}
