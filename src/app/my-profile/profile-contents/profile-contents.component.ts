import { Component, Input, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { ProfilePortfolioComponent } from './profile-portfolio/portfolio'; 
import { MockPortfolioFilter } from '../dataMock/portfolioFilterMock';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-profile-contents',
  templateUrl: './profile-contents.component.html',
  styleUrls: ['./profile-contents.component.scss']
})
export class ProfileContentsComponent implements OnInit {
  
  @Input() isPortuguese: boolean = false;
  groupedFilter: SelectItemGroup[] = MockPortfolioFilter;
  portfolioComponente: ProfilePortfolioComponent;

  constructor(private service: DataService) {
    this.portfolioComponente = new ProfilePortfolioComponent(service);
   }

  ngOnInit() {}

  selectedFilter(param: any) {
    this.portfolioComponente.filterSelected(param.value);
  }

}
