import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pokemon, PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  query = 'ditto';
  pokemon: Pokemon | null = null;
  loading = false;
  error = '';

  constructor(private pokemonService: PokemonService) {}

  search(): void {
    const term = this.query.trim();
    if (!term) {
      this.error = 'Escribe el nombre de un Pokémon.';
      this.pokemon = null;
      return;
    }

    this.loading = true;
    this.error = '';

    this.pokemonService.getPokemon(term).subscribe({
      next: (result) => {
        this.pokemon = result;
        this.loading = false;
      },
      error: () => {
        this.pokemon = null;
        this.error = `No se encontró ningún Pokémon llamado "${term}".`;
        this.loading = false;
      },
    });
  }
}
