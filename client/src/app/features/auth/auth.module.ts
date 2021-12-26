import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { AuthLayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AuthComponent, AuthLayoutComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, SharedModule],
  exports: [],
})
export class AuthModule {}
