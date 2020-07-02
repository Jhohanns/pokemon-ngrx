import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from '@services/pokemon/pokemon.service';
import { EMPTY } from 'rxjs';
import { catchError, flatMap, map, switchMap, tap } from 'rxjs/operators';
import { PokemonActionTypes } from './pokemon.actions';


@Injectable()
export class PokemonEffects {
  searchPokemonFirstTime = false;
  searchPokemonCurrentPage = 0;

  searchPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActionTypes.SearchPokemons),
      switchMap(() => {
        if ((!this.searchPokemonFirstTime && this.searchPokemonCurrentPage === 0) || this.searchPokemonCurrentPage > 0) {
          this.searchPokemonFirstTime = true;
          return this.pokemonService.getPokemons(this.searchPokemonCurrentPage).pipe(
            map((res) => ({ type: PokemonActionTypes.SearchResponse, pokemonsResponse: res })),
            tap(() => this.searchPokemonCurrentPage++)
          );
        }
        return EMPTY;
      }),
      catchError(() => EMPTY)
    ));


  selectPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokemonActionTypes.SelectPokemon),
      switchMap((action: any) => {
        return this.pokemonService.getPokemonSpecies(action.pokemonDetail.id).pipe(
          flatMap((response: any) => {
            const idFromChainUrl = response.evolution_chain.url.split('/').reverse()[1];
            return this.pokemonService.getPokemonEvolutionChain(idFromChainUrl).pipe(map(
              (evoResponse: any) => ({
                type: PokemonActionTypes.SelectPokemonResponse,
                selectedPokemon: { detail: action.pokemonDetail, evolutionChain: evoResponse }
              })
            ));
          })
        );
      }),
      catchError(() => EMPTY)
    ));

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) { }
}
