import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptorService } from './services/auth-token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

const AuthInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true,
};

@NgModule({
  declarations: [],
  providers: [AuthInterceptor],
  imports: [CommonModule, HttpClientModule],
  exports: [],
})
export class CoreModule {}
