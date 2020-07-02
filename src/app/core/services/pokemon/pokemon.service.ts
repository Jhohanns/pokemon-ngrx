import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IPokemon, IPokemonDetail } from '@interfaces/pokemon.interface';
import { forkJoin, Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = environment.pokemonBaseUrl;

  constructor(private http: HttpClient) { }

  getPokemons(page: number = 0, size: number = 30): Observable<any> {
    return this.http.get(`${this.baseUrl}pokemon?limit=${size}&offset=${(size * page)}`).pipe(
      flatMap((response: IPokemon) => {
        const calls = new Array(response.results.length).fill({}).map((x, index) => {
          const pokemonID = response.results[index].url.split('/').reverse()[1];
          return this.getPokemon(pokemonID).pipe(map(pokemon =>
            ({
              id: pokemon.id, name: pokemon.name, types: pokemon.types,
              moves: pokemon.moves, height: pokemon.height, weight: pokemon.weight, sprites: pokemon.sprites
            })));
        });

        return forkJoin(calls).pipe(
          map((pokemonDetails: IPokemonDetail[]) => (
            { totalPokemons: response.count, pokemonList: pokemonDetails }
          ))
        );
      })
    );
  }

  getPokemon(idOrName: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}pokemon/${idOrName}`);
  }

  getPokemonEvolutionChain(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}evolution-chain/${id}`);
  }

  getPokemonSpecies(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}pokemon-species/${id}`);
  }
}
