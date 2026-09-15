import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PikachuComponent } from './pokemon/pikachu.component';
import { CharizardComponent } from './pokemon/charizard.component';
import { BulbasaurComponent } from './pokemon/bulbasaur.component';
import { SquirtleComponent } from './pokemon/squirtle.component';
import { DittoComponent } from './pokemon/ditto.component';
import { MewtwoComponent } from './pokemon/mewtwo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PikachuComponent,
    CharizardComponent,
    BulbasaurComponent,
    SquirtleComponent,
    DittoComponent,
    MewtwoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tabs = [
    'pikachu',
    'charizard',
    'bulbasaur',
    'squirtle',
    'ditto',
    'mewtwo',
  ];
  activo = this.tabs[0];

  seleccionar(tab: string): void {
    this.activo = tab;
  }
}
