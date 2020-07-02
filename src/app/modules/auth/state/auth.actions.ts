import { IUser } from '@interfaces/user.interface';
import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
    Login = '[Login] Login step',
    Register = '[Profile] Register',
    Update = '[Profile] Update',
}

export const loginAction = createAction(
    AuthActionTypes.Login,
    props<{ user: IUser }>()
);

export const registerAction = createAction(
    AuthActionTypes.Register,
    props<{ user: IUser }>()
);

export const updateAction = createAction(
    AuthActionTypes.Update,
    props<{ user: IUser }>()
);