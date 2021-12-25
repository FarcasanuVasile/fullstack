import { NgModule } from '@angular/core';
import { MessengerRoutingModule } from './messenger-routing.module';
import { MessengerComponent } from './messenger.component';

@NgModule({
  declarations: [MessengerComponent],
  imports: [MessengerRoutingModule],
})
export class MessengerModule {}
