import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {PokemonAPIService} from "../service/pokemon-API.service";
import {HttpClient} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {DialongPokemonComponent} from "./dialong-pokemon/dialong-pokemon.component";

@Component({
  selector: 'app-capturar-pokemon',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  providers: [PokemonAPIService],
  templateUrl: './capturar-pokemon.component.html',
  styleUrl: './capturar-pokemon.component.scss',
})
export class CapturarPokemonComponent {
  constructor(
    private  pokemonAPIService: PokemonAPIService,
    public dialog: MatDialog
  ) {
  }

  pokebolaAberta = false;
  pokebolaFechada = true;
  pokebolaAnimacao = false;
  pokemonSorteado: any;

 async sortearPokemon(){
    await this.pokemonAPIService.consultaTodosPokemon(0, 1293).toPromise().then(async r => {
      console.log(r)
      const indiceAleatorio = Math.floor(Math.random() * r.count);
      let pokemonSorteado = r.results[indiceAleatorio]
      this.pokemonSorteado = await this.pokemonAPIService.restURL(pokemonSorteado.url).toPromise()

      console.log(this.pokemonSorteado)
      console.log(pokemonSorteado)

      this.pokebolaFechada = false
      this.pokebolaAnimacao = true
      setTimeout(()=> {
        this.pokebolaAnimacao = false
        this.pokebolaAberta = true
      }, 1150)
    })
  }

  reset() {
    this.pokebolaAberta = false;
    this.pokebolaFechada = true;
    this.pokebolaAnimacao = false;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialongPokemonComponent, {
      width: '650px',
      data: this.pokemonSorteado,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
