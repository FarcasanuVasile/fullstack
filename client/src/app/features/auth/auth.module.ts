import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { AuthLayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [AuthComponent, AuthLayoutComponent, RegisterComponent],
  imports: [ReactiveFormsModule, AuthRoutingModule],
  exports: [],
})
export class AuthModule {}
