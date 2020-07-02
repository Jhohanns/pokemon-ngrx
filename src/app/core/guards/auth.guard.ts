import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { getCurrentLoggedUser, State } from '@modules/auth/state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
    constructor(
        private store: Store<State>,
        private router: Router,
    ) { }


    canLoad(): Observable<boolean> {
        return this.isAuthenticated();
    }

    canActivate(): Observable<boolean> {
        return this.isAuthenticated();
    }

    isAuthenticated() {
        return this.store.pipe(
            select(getCurrentLoggedUser),
            map(user => user ? true : false),
            tap(user => {
                if (!user) {
                    this.router.navigate(['auth/login']);
                }
            }),
            take(1)
        );
    }
}
