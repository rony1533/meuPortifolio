import { Component, OnInit } from '@angular/core';
import { Portfolio as Portfolio, TechnologiesUsed } from '../../model/portifolio.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-profile-portfolio',
  templateUrl: './profile-portfolio.component.html',
  styleUrls: ['./profile-portfolio.component.scss']
})
export class ProfilePortfolioComponent implements OnInit {

  itemData: Portfolio[] = [];
  // data: Portfolio[] = [];

  constructor(private service: DataService) { }
  
  ngOnInit(): void {
    
    this.service.getPortfolio().then(portfolio => {

      this.itemData.push(...portfolio); 
    }).catch(error => {
      console.error('Erro ao obter portfólio:', error);
    });
  }

  getIconByName(name: string) {
    
    return `../../../assets/icons/${name.toLowerCase()}.png`;
  }

  filterSelected(filters: String[]) {
    
    // const dataFiltered = this.data.filter(item => {
    //   return item.technologiesUsed.some((tech: string) => filters.includes(tech.toLocaleLowerCase()))
    // }
    // );

    // dataFiltered.map(i => {
    //   this.itemData.push(i);
    // })

  }

}
