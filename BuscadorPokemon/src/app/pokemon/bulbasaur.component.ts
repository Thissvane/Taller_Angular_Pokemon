import { Component } from '@angular/core';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-bulbasaur',
  standalone: true,
  imports: [PokemonCardComponent],
  template: `<app-pokemon-card name="bulbasaur" />`,
})
export class BulbasaurComponent {}
