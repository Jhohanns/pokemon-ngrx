import { IUser } from '@interfaces/user.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromAuthState from '../state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loginSub: Subscription;
  isBusy = false;

  constructor(
    private store: Store<fromAuthState.State>,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.loginSubscription();
  }

  loginSubscription() {
    this.loginSub = this.store.pipe(select(fromAuthState.getCurrentLoggedUser))
      .subscribe((response: IUser) => {
        if (this.isBusy) {
          if (response && response.email) {
            this.router.navigate(['pokemon/list']);
          } else {
            this.openSnackBar('Incorrect email or password');
          }
          this.isBusy = false;
        }
      });
  }

  goToRegister() {
    this.router.navigate(['auth/profile']);
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    });
  }

  login() {
    const user: IUser = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    };

    this.isBusy = true;
    this.store.dispatch(fromAuthState.loginAction({ user }));
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }

  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
  }

}
