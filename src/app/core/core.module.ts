import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule
    

  ],
  exports: [HeaderComponent, FooterComponent, MainComponent]
})
export class CoreModule { }
