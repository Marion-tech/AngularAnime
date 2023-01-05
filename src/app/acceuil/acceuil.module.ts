import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceuilComponent } from './acceuil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimeModule } from '../shared/components/anime/anime.module';



@NgModule({
  declarations: [
    AcceuilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AnimeModule,
  ],
  exports: [
    AcceuilComponent
  ]
})
export class AcceuilModule { }
