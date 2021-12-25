import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      {
        path: 'messenger',
        loadChildren: () =>
          import('./features/messenger/messenger.module').then(
            (m) => m.MessengerModule
          ),
        data: { pageTitle: 'Messenger' },
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./features/auth/auth.module').then((m) => m.AuthModule),
        data: { PageTitle: 'Authetication' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
