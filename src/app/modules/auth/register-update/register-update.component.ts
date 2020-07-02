import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { PROFILE } from '@constants';
import { IUser } from '@interfaces/user.interface';
import { select, Store } from '@ngrx/store';
import { capitalCountValidator } from '@validators/capital-count.validator';
import { numberCountValidator } from '@validators/number-count.validator';
import { specialCharacterValidator } from '@validators/special-character.validator';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import * as fromAuthState from '../state';

@Component({
  selector: 'app-register-update',
  templateUrl: './register-update.component.html',
  styleUrls: ['./register-update.component.scss']
})
export class RegisterUpdateComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  registeredUsers: IUser[];
  isUpdating = false;
  profileSub: Subscription;
  isBusy = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<fromAuthState.State>,
    private snackBar: MatSnackBar
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.profileSubscription();
    this.isUserLogged();
  }

  ngOnDestroy(): void {
    this.profileSub.unsubscribe();
  }

  profileSubscription() {
    this.profileSub = this.store.pipe(
      select(fromAuthState.getCurrentRegisteredUsers)
    ).subscribe((response: IUser[]) => {
      this.registeredUsers = response;
    });
  }

  isUserLogged() {
    this.store.pipe(
      select(fromAuthState.getCurrentLoggedUser),
      take(1)
    ).subscribe((response: IUser) => {
      console.log('aqui esta', response);
      if (response && response.email) {
        this.isUpdating = true;
        this.setCurrentUserInfo(response);
      }
    });
  }

  setCurrentUserInfo(user: IUser) {
    this.formControls.name.setValue(user.name);
    this.formControls.password.setValue(user.password);
    this.formControls.confirmPassword.setValue(user.password);
    this.formControls.email.setValue(user.email);
    this.formControls.email.disable();
  }

  buildForm() {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          numberCountValidator(PROFILE.PASSWORD.MIN_NUMBERS_COUNT),
          specialCharacterValidator(PROFILE.PASSWORD.MIN_SPECIAL_CHARACTERS_COUNT),
          capitalCountValidator(PROFILE.PASSWORD.MIN_CAPITALS_COUNT),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    });
  }

  get formControls() {
    return this.signUpForm.controls;
  }

  get passwordsMatch() {
    return this.formControls.password.value === this.formControls.confirmPassword.value;
  }

  submitForm() {
    if (this.signUpForm.valid && this.passwordsMatch) {
      const user: IUser = {
        name: this.formControls.name.value,
        email: this.formControls.email.value,
        password: this.formControls.password.value,
      };

      const exist = this.registeredUsers.find((regUser: IUser) => regUser.email === user.email);

      if (this.isUpdating && exist) {
        this.updateProfile(user);
      } else if (!this.isUpdating && exist) {
        this.openSnackBar('Email is already in use');
      } else {
        this.registerProfile(user);
      }
    }
  }

  updateProfile(user: IUser) {
    this.openSnackBar('Profile updated');
    this.store.dispatch(fromAuthState.updateAction({ user }));
    this.goBack();
  }

  registerProfile(user: IUser) {
    this.store.dispatch(fromAuthState.registerAction({ user }));
    this.goBack();
  }

  goBack() {
    this.router.navigate(['pokemon/list']);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
}
