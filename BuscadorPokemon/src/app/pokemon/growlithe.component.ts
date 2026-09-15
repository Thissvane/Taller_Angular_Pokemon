import { Component } from '@angular/core';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-growlithe',
  standalone: true,
  imports: [PokemonCardComponent],
  template: `<app-pokemon-card name="growlithe" />`,
})
export class GrowlitheComponent {}
