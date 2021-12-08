import { Component, OnInit } from '@angular/core';
import * as data from '../data/menu.data.json';
import * as dataItems from '../data/menu-items.data.json';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  private menuData = data
  public itemsMenuData = dataItems

  public isActived = ''

  public itemsMenu: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.searchTypeMenu('starters')
  }

  searchTypeMenu(itemType: string) {
    this.isActived = itemType
    this.itemsMenu = this.menuData.data.find(item => item.typeMenu === itemType )?.data!
  } 

}
