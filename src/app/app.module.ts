import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { environment } from '@environments/environment';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      CoreModule,
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      StoreDevtoolsModule.instrument({
         maxAge: 25, // Retains last 25 states
         logOnly: environment.production, // Restrict extension to log-only mode
      }),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
