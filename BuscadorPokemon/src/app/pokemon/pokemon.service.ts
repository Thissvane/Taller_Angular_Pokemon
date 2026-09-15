import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Pokemon {
  name: string;
  image: string;
  types: string[];
  height: number; // en metros
  weight: number; // en kilogramos
}

interface PokeApiResponse {
  name: string;
  height: number; // decímetros
  weight: number; // hectogramos
  types: { type: { name: string } }[];
  sprites: {
    front_default: string | null;
    other?: {
      'official-artwork'?: {
        front_default: string | null;
      };
    };
  };
}

const TYPE_ES: Record<string, string> = {
  normal: 'Normal',
  fire: 'Fuego',
  water: 'Agua',
  electric: 'Eléctrico',
  grass: 'Planta',
  ice: 'Hielo',
  fighting: 'Lucha',
  poison: 'Veneno',
  ground: 'Tierra',
  flying: 'Volador',
  psychic: 'Psíquico',
  bug: 'Bicho',
  rock: 'Roca',
  ghost: 'Fantasma',
  dragon: 'Dragón',
  dark: 'Siniestro',
  steel: 'Acero',
  fairy: 'Hada',
};

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getPokemon(nameOrId: string): Observable<Pokemon> {
    const query = nameOrId.trim().toLowerCase();
    return this.http.get<PokeApiResponse>(`${this.baseUrl}/${query}`).pipe(
      map((res) => ({
        name: res.name,
        image:
          res.sprites.other?.['official-artwork']?.front_default ??
          res.sprites.front_default ??
          '',
        types: res.types.map((t) => TYPE_ES[t.type.name] ?? t.type.name),
        height: res.height / 10, // decímetros -> metros
        weight: res.weight / 10, // hectogramos -> kilogramos
      })),
    );
  }
}
