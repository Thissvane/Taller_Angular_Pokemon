import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon, PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <p class="loading" *ngIf="loading">Cargando...</p>

      <p class="error" *ngIf="error" role="alert">{{ error }}</p>

      <div class="result" *ngIf="pokemon && !error">
        <div class="image-wrap">
          <img
            *ngIf="pokemon.image; else noImage"
            class="image"
            [src]="pokemon.image"
            [alt]="'Imagen de ' + pokemon.name"
          />
          <ng-template #noImage>
            <span class="no-image">Sin imagen disponible</span>
          </ng-template>
        </div>

        <h2 class="name">{{ pokemon.name }}</h2>

        <dl class="stats">
          <div class="stat">
            <dt>Tipo</dt>
            <dd>{{ pokemon.types.join(' / ') }}</dd>
          </div>
          <div class="stat">
            <dt>Altura</dt>
            <dd>{{ pokemon.height.toLocaleString('es') }} m</dd>
          </div>
          <div class="stat">
            <dt>Peso</dt>
            <dd>{{ pokemon.weight.toLocaleString('es') }} kg</dd>
          </div>
        </dl>
      </div>
    </div>
  `,
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnChanges {
  @Input({ required: true }) name = '';

  pokemon: Pokemon | null = null;
  loading = false;
  error = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnChanges(): void {
    this.load();
  }

  private load(): void {
    const term = this.name.trim();
    if (!term) return;

    this.loading = true;
    this.error = '';
    this.pokemon = null;

    this.pokemonService.getPokemon(term).subscribe({
      next: (result) => {
        this.pokemon = result;
        this.loading = false;
      },
      error: () => {
        this.error = `No se encontró ningún Pokémon llamado "${term}".`;
        this.loading = false;
      },
    });
  }
}
