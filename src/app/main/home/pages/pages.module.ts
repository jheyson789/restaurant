import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesMenuComponent } from './services-menu/services-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ComponentsModule } from './components/components.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ChefsComponent } from './chefs/chefs.component';



@NgModule({
  declarations: [
    ServicesMenuComponent,
    MainMenuComponent,
    GalleryComponent,
    ChefsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ServicesMenuComponent,
    MainMenuComponent,
    GalleryComponent,
    ChefsComponent
  ]
})
export class PagesModule { }
