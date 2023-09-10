import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-footer',
  templateUrl: './profile-footer.component.html',
  styleUrls: ['./profile-footer.component.scss']
})
export class ProfileFooterComponent implements OnInit {

  @Input() isPortuguese: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
