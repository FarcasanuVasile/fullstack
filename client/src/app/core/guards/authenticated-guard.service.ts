import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../store/app.reducer';
@Injectable({ providedIn: 'root' })
export class AuthenticatedGuard implements CanActivate, OnInit {
  isAuth: boolean;
  subscription: Subscription;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    this.subscription = this.store.select('auth').subscribe((authData) => {
      this.isAuth = authData.isAuth;
    });
    // If user is logged in return false and dont let them go to that route
    if (this.isAuth) return this.router.createUrlTree(['/']);
    return true;
  }
  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
