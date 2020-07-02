import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { AuthenticationService } from '@services/authentication/authentication.service';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService
  ) { }

}
