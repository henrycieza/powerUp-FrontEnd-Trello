import { IndexComponent } from './index.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormRegisterComponent } from './form-register/form-register.component';


@NgModule({
  declarations: [FormLoginComponent, FormRegisterComponent, IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule
  ],
  exports: [IndexComponent]
})
export class IndexModule { }
