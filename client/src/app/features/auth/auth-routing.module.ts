import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/core/guards/authenticated-guard.service';

import { AuthComponent } from './components/auth/auth.component';
import { AuthLayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [AuthenticatedGuard],
    children: [
      { path: '', component: AuthComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
