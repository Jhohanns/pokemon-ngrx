import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromPokemon from './state';

import { SharedModule } from '@shared/shared.module';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonDetailComponent
    ],
    imports: [
        PokemonRoutingModule,
        SharedModule,
        StoreModule.forFeature(fromPokemon.featureName, fromPokemon.reducer),
        EffectsModule.forFeature([fromPokemon.PokemonEffects]),
    ],
    providers: [],
})
export class PokemonModule { }
