import { Component, Input, OnInit } from '@angular/core';
import { Portfolio as Portfolio } from '../../model/portifolio.model';

@Component({
  selector: 'app-profile-portifolio',
  templateUrl: './profile-portifolio.component.html',
  styleUrls: ['./profile-portifolio.component.scss']
})
export class ProfilePortifolioComponent implements OnInit {

  itemData: Portfolio[] = [];
  data: Portfolio[]= [
    {title: 'Calculadora', imageUrl: '../../../assets/calculadora-simples.png', linkHref: 'https://github.com/rony1533/Calculadora', 
      technologiesUsed: [
        {name: 'HTML', icon: '../../../assets/html.png'}, {name: 'CSS', icon: '../../../assets/css.png'}, {name: 'JavaScript', icon: '../../../assets/js.png'}
      ]
    },
    {title: 'Transforma texto', imageUrl: '../../../assets/transforma-texto.png', linkHref: 'https://github.com/rony1533/Transforma-Texto', 
      technologiesUsed: [
        {name: 'HTML', icon: '../../../assets/html.png'}, {name: 'CSS', icon: '../../../assets/css.png'}, {name: 'JavaScraipt', icon: '../../../assets/js.png'}
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    this.data.map((data) => this.itemData.push(data))
  }

  filterSelected(filters: String[]) {

  const dataFiltered = this.data.filter(item =>
    item.technologiesUsed.some(tech => filters.includes(tech.name.toLocaleLowerCase()))
  );

  dataFiltered.map(i => {
    this.itemData.push(i);
  })

  }

}
