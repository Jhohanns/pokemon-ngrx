import { createAction, props } from '@ngrx/store';

export enum PokemonActionTypes {
    SearchPokemons = '[Pokemon] Search Pokemons',
    SearchResponse = '[Pokemon] Search Response',
    SearchTrigger = '[Pokemon] Trigger Search',
    SelectPokemon = '[Pokemon] Select Pokemon',
    SelectPokemonResponse = '[Pokemon] Select Pokemon Response',
}

export const searchAction = createAction(
    PokemonActionTypes.SearchPokemons,
);
export const searchResponseAction = createAction(
    PokemonActionTypes.SearchResponse,
    props<{ pokemonsResponse: any }>()
);

export const searchTriggerAction = createAction(
    PokemonActionTypes.SearchTrigger
);

export const selectPokemonAction = createAction(
    PokemonActionTypes.SelectPokemon,
    props<{ pokemonDetail: any }>()
);

export const selectPokemonResponseAction = createAction(
    PokemonActionTypes.SelectPokemonResponse,
    props<{ selectedPokemon: { detail: any, evolutionChain: any }, }>()
);
