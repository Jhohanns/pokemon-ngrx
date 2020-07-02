import { IUser } from '@interfaces/user.interface';
import { loginAction, registerAction, updateAction } from './auth.actions';
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';

export const featureName = 'auth';

export interface State {
    loggedUser: IUser;
    registeredUsers: IUser[];
}

export const initialState: State = {
    loggedUser: null,
    registeredUsers: []
};

const scoreboardReducer = createReducer(
    initialState,
    on(loginAction, (state, { user }) => {
        {
            const exist = state.registeredUsers.find(
                userRegistered => userRegistered.email === user.email && userRegistered.password === user.password
            );
            if (exist) {
                return { ...state, loggedUser: exist };
            }
            return { ...state, loggedUser: { ...state.loggedUser } };
        }
    }),
    on(updateAction, (state, { user }) => {
        {
            const array: IUser[] = [...state.registeredUsers];
            const userProfile: IUser = { email: user.email, password: user.password, name: user.name };

            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                if (element.email === user.email) {
                    array[index] = user;
                }
            }
            return {
                ...state, registeredUsers: [...array],
                loggedUser: { ...userProfile }
            };
        }
    }),
    on(registerAction, (state, { user }) => ({ ...state, registeredUsers: [...state.registeredUsers, user] }))
);


export function reducer(state: State | undefined, action: Action) {
    return scoreboardReducer(state, action);
}


export const selectAuthState = createFeatureSelector(featureName);

export const getCurrentLoggedUser = createSelector(
    selectAuthState,
    (state: State) => state && state.loggedUser ? state.loggedUser : null
);

export const getCurrentRegisteredUsers = createSelector(
    selectAuthState,
    (state: State) => state.registeredUsers
);
