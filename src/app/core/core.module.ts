import { IndexModule } from './../features/trello/index/index.module';
import { NotFoundModule } from './not-found/not-found.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatToolbarModule,
    IndexModule
    
    

  ],
  exports: [HeaderComponent, FooterComponent, MainComponent]
})
export class CoreModule { }
