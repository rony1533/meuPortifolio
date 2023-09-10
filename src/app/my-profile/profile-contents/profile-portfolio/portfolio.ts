import { Component, OnInit } from '@angular/core';
import { Portfolio as Portfolio } from '../../model/portifolio.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-profile-portfolio',
  templateUrl: './profile-portfolio.component.html',
  styleUrls: ['./profile-portfolio.component.scss']
})
export class ProfilePortfolioComponent implements OnInit {

  itemData: any[] = [];
  data: any[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getPortfolio().subscribe((res) => {
      res.map((item) => {
        this.data.push(item);
        this.itemData.push(item);
      });
    })
    
  }

  getIconByName(name: string) {
    return `../../../assets/icons/${name.toLowerCase()}.png`;
  }

  filterSelected(filters: String[]) {
    this.test();
    
    // const dataFiltered = this.data.filter(item => {
    //   return item.technologiesUsed.some((tech: string) => filters.includes(tech.toLocaleLowerCase()))
    // }
    // );

    // dataFiltered.map(i => {
    //   this.itemData.push(i);
    // })

  }

  test() {
    console.log(this.itemData);
    
  }

}
