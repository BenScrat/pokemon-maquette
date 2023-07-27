import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { CardModule } from 'primeng/card';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
