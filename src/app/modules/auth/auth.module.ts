import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterUpdateComponent } from './register-update/register-update.component';
import * as fromAuth from './state';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterUpdateComponent
    ],
    imports: [
        AuthRoutingModule,
        SharedModule,
        StoreModule.forFeature(fromAuth.featureName, fromAuth.reducer),
        EffectsModule.forFeature([fromAuth.AuthEffects]),
    ],
})
export class AuthModule { }
