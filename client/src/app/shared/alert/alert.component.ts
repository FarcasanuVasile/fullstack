import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/core/store/app.reducer';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit, OnDestroy {
  alerts: { type: string; message: string }[];
  subscription: Subscription;

  constructor(private store: Store<AppState>) {}
  getColor(type): string {
    if (type == 'danger') return '#dc3545';
    if (type == 'success') return '#28a745';
    if (type == 'warning') return '#ffc107';
    return 'transparent';
  }
  ngOnInit(): void {
    this.subscription = this.store.select('error').subscribe((errorsState) => {
      this.alerts = errorsState.errors;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
