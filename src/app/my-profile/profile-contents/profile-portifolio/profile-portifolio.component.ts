import { Component, Input, OnInit } from '@angular/core';
import { Portfolio as Portfolio } from '../../model/portifolio.model';

@Component({
  selector: 'app-profile-portifolio',
  templateUrl: './profile-portifolio.component.html',
  styleUrls: ['./profile-portifolio.component.scss']
})
export class ProfilePortifolioComponent implements OnInit {

  itemData: Portfolio[] = []

  constructor() { }

  ngOnInit() {

    this.itemData.push(
      {title: 'Calculadora Simples', imageUrl: '../../../assets/calculadora-simples.png', linkHref: 'https://github.com/rony1533/Calculadora-simples', 
        technologiesUsed: [
          {name: 'HTML', icon: '../../../assets/html.png'}, {name: 'CSS', icon: '../../../assets/css.png'}, {name: 'JavaScript', icon: '../../../assets/js.png'}
        ]
      },
      {title: 'Transforma texto', imageUrl: '../../../assets/transforma-texto.png', linkHref: 'https://github.com/rony1533/Transforma-Texto', 
        technologiesUsed: [
          {name: 'HTML', icon: '../../../assets/html.png'}, {name: 'CSS', icon: '../../../assets/css.png'}, {name: 'JavaScript', icon: '../../../assets/js.png'}
        ]
      })
  }

}
