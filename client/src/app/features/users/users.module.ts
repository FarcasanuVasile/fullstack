import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserPanelComponent],
  imports: [CommonModule, UsersRoutingModule],
  providers: [],
  exports: [],
})
export class UsersModule {}
