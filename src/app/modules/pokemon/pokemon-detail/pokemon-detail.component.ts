import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as fromPokemonState from '../state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { IPokemonDetail } from '@interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemonCustomDetail$: Observable<any>;
  pokemonEvolutions: IPokemonDetail[];
  loading = true;

  constructor(private store: Store<fromPokemonState.State>, private router: Router) { }

  ngOnInit() {
    this.pokemonDetailObservable();
  }

  pokemonDetailObservable() {
    this.pokemonCustomDetail$ = this.store.pipe(
      select(fromPokemonState.getPokemonSelected),
      tap((res: any) => {
        if (res.detail || res.evolutionChain) {
          this.getEvolutionNames(res.evolutionChain);
          this.loading = false;
        }
      }));
  }

  goBack() {
    this.router.navigate(['pokemon/list']);
  }

  searchEvolutionsByName(names: any[]) {
    this.store.pipe(
      select(fromPokemonState.getPokemonList),
      map((pokemonList: any) => {
        return pokemonList.filter(pokemon => names.includes(pokemon.name))
      })
    ).subscribe(response => this.pokemonEvolutions = response);
  }

  getEvolutionNames(evolutionData: any) {
    const names = [];
    let evolutionInfo = evolutionData.chain;
    while (evolutionInfo) {
      names.push(evolutionInfo.species.name);
      evolutionInfo = evolutionInfo.evolves_to[0];
    }
    this.searchEvolutionsByName(names);
  }

  /**
   * Dispatch new action to load the selected pokemon from evolutions
   */
  selectPokemon(pokemon: IPokemonDetail) {
    this.store.dispatch(fromPokemonState.selectPokemonAction({ pokemonDetail: pokemon }));
  }

}
