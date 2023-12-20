import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";

@Component({
  selector: 'app-dialong-pokemon',
  standalone: true,
  imports: [
    NgIf,
    MatCardModule,
    FlexModule
  ],
  templateUrl: './dialong-pokemon.component.html',
  styleUrl: './dialong-pokemon.component.scss'
})
export class DialongPokemonComponent implements OnInit {
  listAtk = new Array<any>();

  constructor(
    @Inject(
      MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit() {
    this.sortearATKPokemon()
    this.sortearCP()
  }

  sortearATKPokemon() {
    let atk1Indice = Math.floor(Math.random() * this.data.moves.length);
    let atk2Indice = Math.floor(Math.random() * this.data.moves.length);

    while (atk1Indice === atk2Indice) {
      atk2Indice = Math.floor(Math.random() * this.data.moves.length);
    }
    this.listAtk.push(this.data.moves[atk1Indice])
    this.listAtk.push(this.data.moves[atk2Indice])
    console.log(this.listAtk)
  }

  sortearCP() {
    this.data["CP"] = Math.floor(Math.random() * 1523);
    console.log(this.data)
  }

  retornaStringATKs() {
    return this.listAtk.map(objeto => objeto.move.name).join(", ");
  }

  retornaTipos() {
    return this.data.types.map((objeto: any) => objeto.type.name).join(", ");
  }


}
