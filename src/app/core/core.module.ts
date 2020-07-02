import { PokemonService } from './services/pokemon/pokemon.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [AuthGuard, AuthenticationService, PokemonService],
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FooterComponent,
        HeaderComponent
    ]
})
export class CoreModule { }