import { Component } from '@angular/core';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-psyduck',
  standalone: true,
  imports: [PokemonCardComponent],
  template: `<app-pokemon-card name="psyduck" />`,
})
export class PsyduckComponent {}
