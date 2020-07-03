import { IPokemonDetail } from '@interfaces/pokemon.interface';
import { searchResponseAction, searchTriggerAction, selectPokemonResponseAction, selectPokemonAction } from './pokemon.actions';
import { createReducer, on, Action, createSelector, createFeatureSelector } from '@ngrx/store';

export const featureName = 'pokemon';

export interface State {
    pokemonList: IPokemonDetail[];
    totalPokemons: number;
    pokemonSelected: {
        detail: IPokemonDetail,
        evolutionChain: any
    };
}

export const initialState: State = {
    pokemonList: [],
    totalPokemons: 0,
    pokemonSelected: {
        detail: {} as IPokemonDetail,
        evolutionChain: {}
    }
};

const scoreboardReducer = createReducer(
    initialState,
    on(searchResponseAction, (state, { pokemonsResponse }) =>
        ({
            ...state, pokemonList: state.pokemonList.length ?
                [...state.pokemonList, ...pokemonsResponse.pokemonList] :
                [...pokemonsResponse.pokemonList], totalPokemons: pokemonsResponse.totalPokemons
        })),
    on(searchTriggerAction, (state) =>
        ({
            ...state, pokemonList: [...state.pokemonList]
        })),
    on(selectPokemonResponseAction, (state, { selectedPokemon }) =>
        ({
            ...state, pokemonSelected: selectedPokemon
        })),
    on(selectPokemonAction, (state) =>
        ({
            ...state, pokemonSelected: {}
        })),
);


export function reducer(state: State | undefined, action: Action) {
    return scoreboardReducer(state, action);
}

export const selectPokemonResponse = createFeatureSelector(featureName);

export const getPokemonList = createSelector(
    selectPokemonResponse,
    (state: State) => state.pokemonList
);

export const getPokemonSelected = createSelector(
    selectPokemonResponse,
    (state: State) => state.pokemonSelected
);
