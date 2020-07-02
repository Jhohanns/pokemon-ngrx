import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as fromAuthState from '@modules/auth/state/auth.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged$: Observable<any>;

  constructor(private router: Router, private store: Store<fromAuthState.State>) {
    this.isLogged$ = this.store.pipe(select(fromAuthState.getCurrentLoggedUser));

  }

  ngOnInit() {
  }

  goToPokemons() {
    this.router.navigate(['pokemon']);
  }

  goToLogin() {
    window.location.reload();
  }

  goToProfile() {
    this.router.navigate(['auth/profile']);
  }

}
