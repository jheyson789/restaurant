import { Component, Input, OnInit } from '@angular/core';

type IMenuItems = {
  title: string
  description:string
  price: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input('menuItems') menuItems:IMenuItems[] = []


  constructor() { }

  ngOnInit(): void {
  }

}
