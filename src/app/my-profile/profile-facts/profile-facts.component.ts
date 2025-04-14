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

    //TODO this.doneProject = MockPortfolio.length; 
    this.calculatedWorkExperience();
  }

  calculatedWorkExperience() {
    const startDate = new Date(2021, 5);
    const currentDate = new Date();
  
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    this.yearWork = years.toString();
    this.monthWork = months.toString();
  }

}
