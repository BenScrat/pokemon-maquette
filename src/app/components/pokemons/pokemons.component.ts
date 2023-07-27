import { Component } from '@angular/core';
import {Types} from "../../model/types";
import {Pokemons} from "../../model/pokemons";
import {Categories} from "../../model/categories";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent {
  public type: Types[];
  public categorie:Categories[];
  public pokemons: Pokemons[];


  constructor() {
    this.type = [
      new Types( "Feu"),
      new Types( "Terre"),
      new Types( "Plante"),
      new Types("Poisson")
    ];
    this.categorie=[
        new Categories("graine"),
        new Categories("lézard"),
        new Categories("flamme")
    ]
    this.pokemons = [];
    this.pokemons.push(
        new Pokemons(1, "Bulbizarre", ["Plante"], 6.9, 0.7, 'assets/images/bulbizarre.png',"graine"),
        new Pokemons(2,"Herbizarre",["Plante","Poisson"],13,1,'assets/images/herbizarre.png',"graine"),
        new Pokemons(3,"Florizaarre",["Plante","Poisson"],100,2,'assets/images/florizarre.png',"graine"),
        new Pokemons(4,"Salameche",["Feu"],8.5,0.6,'assets/images/salameche.png',"lézard"),
        new Pokemons(5,"Reptincel",["Feu"],19,1.1,'assets/images/reptincel.png',"flamme"),
        new Pokemons(6,"Dracaufeu",["Feu"],90.5,1.7,'assets/images/dracaufeu.png','flamme'))
  }

  getPokemonTypeShadow(type: string[] | undefined): string {
    if (type && type.length > 0) {
      if (type.includes('Feu')) {
        return 'inset 0px 0px 31px 1px red';
      } else if (type.includes('Eau')) {
        return 'inset 0px 0px 31px 1px blue';
      }else if(type.includes('Plante')){
        return 'inset 0px 0px 31px 1px green';
      }

    }
    return '0 2px 4px rgba(0, 0, 0, 0.1)';
  }
}
