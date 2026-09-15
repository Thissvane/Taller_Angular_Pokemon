import { Component } from '@angular/core';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-gastly',
  standalone: true,
  imports: [PokemonCardComponent],
  template: `<app-pokemon-card name="gastly" />`,
})
export class GastlyComponent {}
