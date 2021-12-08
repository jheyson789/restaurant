import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesMenuComponent } from './services-menu/services-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    ServicesMenuComponent,
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ServicesMenuComponent,
    MainMenuComponent
  ]
})
export class PagesModule { }
