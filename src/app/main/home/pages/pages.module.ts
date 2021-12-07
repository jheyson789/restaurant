import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesMenuComponent } from './services-menu/services-menu.component';



@NgModule({
  declarations: [
    ServicesMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicesMenuComponent
  ]
})
export class PagesModule { }
