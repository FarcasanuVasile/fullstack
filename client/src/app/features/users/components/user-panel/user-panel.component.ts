import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../core/store/app.reducer';

@Component({
  selector: 'app-userpanel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  subscription;
  user!: {};
  constructor(private store: Store<fromApp.AppState>) {}
  ngOnInit() {
    this.subscription = this.store.select('auth').subscribe((state) => {
      console.log(state);
    });
  }
}
