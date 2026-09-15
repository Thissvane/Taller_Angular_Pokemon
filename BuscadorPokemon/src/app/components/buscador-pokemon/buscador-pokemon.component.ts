import { Component } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-buscador-pokemon',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './buscador-pokemon.component.html',
  styleUrl: './buscador-pokemon.component.css'
})
export class BuscadorPokemonComponent {
  readonly pokemons = [
    'pikachu',
    'charizard',
    'bulbasaur',
    'squirtle',
    'gengar',
    'eevee',
  ];
}
