import { Component, Input, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { ProfilePortifolioComponent } from './profile-portifolio/profile-portifolio.component';

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

  groupedFilter!: SelectItemGroup[];

  portifolioComponente: ProfilePortifolioComponent = new ProfilePortifolioComponent;

  constructor() { }

  ngOnInit() {
    this.groupedFilter = [
      {
          label: 'Linguagens',
          value: 'language',
          items: [
              { label: 'Java', value: 'java' },
              { label: 'JavaScript', value: 'javascript' },
          ]
      },
      {
          label: 'Bibliotecas',
          value: 'lib',
          items: [
              { label: 'Bootstrap', value: 'bootstrap' },
              { label: 'NgPrime', value: 'ngprime' }
          ]
      },
      {
          label: 'Frameworks',
          value: 'framework',
          items: [
              { label: 'Angular', value: 'angular' },
              { label: 'React', value: 'react' }
          ]
      }
  ];
  }

  activePortifolio() {
    this.isActiveProtifolio = true;
    this.isActiveSkills = false;
  }

  activeSkills() {
    this.isActiveSkills = true;
    this.isActiveProtifolio = false;
  }

  selectedFilter(param: any) {
    this.portifolioComponente.filterSelected(param.value);
  }

}
