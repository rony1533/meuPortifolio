import { Component, Input, OnInit } from '@angular/core';
// import { MockPortfolio } from '../dataMock/portfolioMock';

@Component({
  selector: 'app-profile-facts',
  templateUrl: './profile-facts.component.html',
  styleUrls: ['./profile-facts.component.scss']
})
export class ProfileFactsComponent implements OnInit {

  @Input() isPortuguese: boolean = false;

  yearWork: string = '';
  monthWork: string = '';
  doneProject: number = 0;

  constructor() { }

  ngOnInit() {

    // this.doneProject = MockPortfolio.length;
    this.calculatedWorkExperience();
  }

  calculatedWorkExperience() {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const workExperience = (Number(date.getFullYear() + '' + month) - 202106).toString();

    this.yearWork = `${workExperience.slice(0,1)}`; 
    this.monthWork = `${Number(workExperience.slice(1,3))}`;
  }

}
