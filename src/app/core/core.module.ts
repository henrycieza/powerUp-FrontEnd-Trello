import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatInputModule
    

  ],
  exports: [HeaderComponent, FooterComponent, MainComponent]
})
export class CoreModule { }
