import { Routes } from '@angular/router';
import { BuscadorComponent } from './buscador-pokemon/buscador.component';
import { RegistroComponent } from './registro-usuario/registro.component';
import { PsyduckComponent } from '../pokemon/psyduck.component';
import { GrowlitheComponent } from '../pokemon/growlithe.component';
import { BulbasaurComponent } from '../pokemon/bulbasaur.component';
import { MachopComponent } from '../pokemon/machop.component';
import { GastlyComponent } from '../pokemon/gastly.component';
import { JolteonComponent } from '../pokemon/jolteon.component';

export const routes: Routes = [
  { path: '', component: BuscadorComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'psyduck', component: PsyduckComponent },
  { path: 'growlithe', component: GrowlitheComponent },
  { path: 'bulbasaur', component: BulbasaurComponent },
  { path: 'machop', component: MachopComponent },
  { path: 'gastly', component: GastlyComponent },
  { path: 'jolteon', component: JolteonComponent },
  { path: '**', redirectTo: '' },
];
