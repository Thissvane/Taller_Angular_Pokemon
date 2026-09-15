import { Component } from '@angular/core';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-machop',
  standalone: true,
  imports: [PokemonCardComponent],
  template: `<app-pokemon-card name="machop" />`,
})
export class MachopComponent {}
