import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isTop = false

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(e:any) {
    const top = e.target['scrollingElement'].scrollTop
    this.isTop = top > 20 ? true : false
  }

}
