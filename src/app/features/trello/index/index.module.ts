import { MatInputModule } from '@angular/material/input';
import { IndexComponent } from './index.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { LayoutComponent } from './layout/layout.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [FormLoginComponent, FormRegisterComponent, IndexComponent, LayoutComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    MatFormFieldModule,
    MatIconModule
   
    
  ],
  exports: [IndexComponent, LayoutComponent]
})
export class IndexModule { }
