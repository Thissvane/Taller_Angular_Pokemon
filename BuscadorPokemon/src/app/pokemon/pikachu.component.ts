import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pikachu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-card.html',
  styleUrls: ['./pokemon-card.css'],
})
export class PikachuComponent {
  readonly nombre = 'pikachu';
  image = '';
  mostrarNombre = false;

  constructor(private http: HttpClient) {
    this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon/${this.nombre}`)
      .subscribe((data) => {
        this.image =
          data.sprites?.other?.['official-artwork']?.front_default ??
          data.sprites?.front_default ??
          '';
      });
  }

  revelar(): void {
    this.mostrarNombre = !this.mostrarNombre;
  }
}
