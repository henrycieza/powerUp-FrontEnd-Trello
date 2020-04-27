import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { FooterComponent } from './core/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/trello/index/index.module').then(m => m.IndexModule)
  },
  {
    path: '**',
    loadChildren: () => import('./core/not-found/not-found.module').then(m => m.NotFoundModule)
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
