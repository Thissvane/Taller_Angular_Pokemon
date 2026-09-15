import { Routes } from '@angular/router'
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';
import { BulbasaurComponent } from './pokemon/bulbasaur.component';
import { GastlyComponent } from './pokemon/gastly.component';
import { GrowlitheComponent } from './pokemon/growlithe.component';
import { JolteonComponent } from './pokemon/jolteon.component';
import { MachopComponent } from './pokemon/machop.component';
import { PsyduckComponent } from './pokemon/psyduck.component';

export const routes: Routes = [
    { path: '', redirectTo: 'registro', pathMatch: 'full'},
    { path: 'registro', component: RegistroUsuarioComponent },
    { path: 'buscador', component: BuscadorPokemonComponent },
    { path: 'bulbasaur', component: BulbasaurComponent },
    { path: 'gastly', component: GastlyComponent },
    { path: 'growlithe', component: GrowlitheComponent },
    { path: 'jolteon', component: JolteonComponent },
    { path: 'machop', component: MachopComponent },
    { path: 'psyduck', component: PsyduckComponent },
    { path: '**', redirectTo: 'registro'}

]