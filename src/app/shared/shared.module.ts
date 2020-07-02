import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PokemonCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [PokemonCardComponent, MaterialModule, CommonModule, ReactiveFormsModule,
    FormsModule]
})
export class SharedModule { }