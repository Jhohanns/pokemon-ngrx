import { Component, HostListener, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, map, tap, bufferTime } from 'rxjs/operators';
import * as fromPokemonState from '../state';

import { IPokemonDetail } from '@interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent implements OnInit {
  pokemonList$: Observable<IPokemonDetail[]>;
  control: FormControl;
  currentPage = 0;
  isBusy = false;

  constructor(private store: Store<fromPokemonState.State>, private router: Router) {
    this.control = new FormControl('');
  }

  ngOnInit() {
    this.searchValueSubscription();
    this.search();
  }

  /**
   * Load a new page with 50 pokemons (Effect knows where we are and change the page if needed)
   */
  loadNewPokemonsPage() {
    this.store.dispatch(fromPokemonState.searchAction());
  }

  /**
   * Subscription to control valueChanges, if the user writes we will wait 500ms and dispatch the action
   */
  searchValueSubscription(): void {
    this.control.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.store.dispatch(fromPokemonState.searchTriggerAction());
    });
  }

  /**
   * Pokemon List observable from Store, whenever it triggers, we will filter by user search text
   */
  search() {
    this.pokemonList$ = this.store.pipe(
      select(fromPokemonState.getPokemonList),
      map((pokemonlist: any) => {
        return pokemonlist.length ? pokemonlist.filter((pokemon) =>
          pokemon.name.includes(this.control.value) ||
          pokemon.types.filter((type) => type.type.name.includes(this.control.value)).length) :
          this.loadNewPokemonsPage();
      }),
      tap(() => this.isBusy = false),
    );
  }

  /**
   * Dispatch new action in order to get all the other info about the selected (evolution chain)
   */
  selectPokemon(pokemon: IPokemonDetail) {
    this.store.dispatch(fromPokemonState.selectPokemonAction({ pokemonDetail: pokemon }));
    this.router.navigate(['pokemon/detail']);
  }

  /**
   * Infinite Scroll implementation, loads the next page of pokemons
   */
  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if ((event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) && !this.isBusy) {
      this.loadNewPokemonsPage();
      this.isBusy = true;
    }
  }

  /**
   * Improves the performance in *ngFor
   */
  trackyFn(item) {
    return item.id;
  }
}
