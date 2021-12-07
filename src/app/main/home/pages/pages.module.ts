import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesMenuComponent } from './services-menu/services-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';



@NgModule({
  declarations: [
    ServicesMenuComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicesMenuComponent,
    MainMenuComponent
  ]
})
export class PagesModule { }
