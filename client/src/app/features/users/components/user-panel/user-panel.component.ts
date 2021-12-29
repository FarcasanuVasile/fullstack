import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuthReducer from '../../../auth/store/auth.reducer';

@Component({
  selector: 'app-userpanel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  subscription;
  user!: {};
  constructor(private store: Store<fromAuthReducer.AppState>) {}
  ngOnInit() {
    this.subscription = this.store.select('authState').subscribe((state) => {
      console.log(state);
    });
  }
}
