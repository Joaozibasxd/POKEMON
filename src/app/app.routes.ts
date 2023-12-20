import { Routes } from '@angular/router';
import {CapturarPokemonComponent} from "./capturar-pokemon/capturar-pokemon.component";
import {homeResolver} from "./home/home.resolver";

export const routes: Routes = [
  { path: 'capturar-pokemon', component: CapturarPokemonComponent },
  { path: 'home', loadComponent: ()  => import('./home/home.component').then((m) => m.HomeComponent), resolve: {
    homeResolver
    } },
  { path: '', pathMatch: "full", redirectTo: "home" }
];
