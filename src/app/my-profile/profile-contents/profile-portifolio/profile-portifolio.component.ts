import { Component, Input, OnInit } from '@angular/core';
import { Portfolio as Portfolio } from '../../model/portifolio.model';

@Component({
  selector: 'app-profile-portifolio',
  templateUrl: './profile-portifolio.component.html',
  styleUrls: ['./profile-portifolio.component.scss']
})
export class ProfilePortifolioComponent implements OnInit {

  @Input() isShowPortifolio: boolean = false;

  itemData: Portfolio[] = []

  constructor() { }

  ngOnInit() {

    this.itemData.push(
      {title: 'Calculadora', imageUrl: 'https://wallpaperaccess.com/full/8091895.jpg', linkHref: 'https://github.com/rony1533', 
        technologiesUsed: [
          {name: 'HTML', icon: '../../../assets/html.png'}, {name: 'Angular framework', icon: '../../../assets/angular.png'}
        ]
      },
      {title: 'Teste 2', imageUrl: 'https://wallpaperaccess.com/full/8091895.jpg', linkHref: 'https://github.com/rony1533', 
        technologiesUsed: [
          {name: 'HTML', icon: '../../../assets/html.png'}, {name: 'Angular framework', icon: '../../../assets/angular.png'}
        ]
      })
  }

}
