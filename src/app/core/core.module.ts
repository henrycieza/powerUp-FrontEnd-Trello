import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent, MainComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, MainComponent]
})
export class CoreModule { }
