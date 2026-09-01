import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Pokemon {
  name: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // El input arranca con "ditto" como en la API de ejemplo del enunciado
  query = 'ditto';
  pokemon: Pokemon | null = null;
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  buscar(): void {
    const nombre = this.query.trim().toLowerCase();
    if (!nombre) {
      this.error = 'Escribe el nombre de un Pokémon.';
      this.pokemon = null;
      return;
    }

    this.loading = true;
    this.error = '';
    this.pokemon = null;

    this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .subscribe({
        next: (data) => {
          this.pokemon = {
            name: data.name,
            image:
              data.sprites?.other?.['official-artwork']?.front_default ??
              data.sprites?.front_default ??
              '',
          };
          this.loading = false;
        },
        error: () => {
          this.error = `No se encontró ningún Pokémon llamado "${nombre}".`;
          this.loading = false;
        },
      });
  }
}
