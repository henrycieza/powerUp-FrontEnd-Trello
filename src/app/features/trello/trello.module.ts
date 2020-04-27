import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrelloRoutingModule } from './trello-routing.module';
import { TrelloComponent } from './trello.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [TrelloComponent, LoginComponent, RegisterComponent, TaskComponent, TaskListComponent, IndexComponent],
  imports: [
    CommonModule,
    TrelloRoutingModule
  ],
  exports: [TrelloComponent, IndexComponent]
})
export class TrelloModule { }
