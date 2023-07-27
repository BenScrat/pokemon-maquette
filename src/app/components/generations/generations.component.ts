import { Component } from '@angular/core';
import {Generations} from "../../model/generations";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent {
  public numGen:Generations[];


  constructor() {
    this.numGen = [];
    for (let i = 1; i <=9 ; i++) {
      this.numGen.push(new Generations(i));
    }
  }
}
