import { Component } from '@angular/core';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-jolteon',
  standalone: true,
  imports: [PokemonCardComponent],
  template: `<app-pokemon-card name="jolteon" />`,
})
export class JolteonComponent {}
