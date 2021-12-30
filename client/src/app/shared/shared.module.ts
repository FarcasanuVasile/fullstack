import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { RemoveClassDirective } from './directives/removeClass.directive';

@NgModule({
  declarations: [LoadingSpinnerComponent, AlertComponent, RemoveClassDirective],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, AlertComponent, RemoveClassDirective],
})
export class SharedModule {}
