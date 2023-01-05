import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeComponent } from './anime.component';



@NgModule({
  declarations: [
    AnimeComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    AnimeComponent
  ],
})
export class AnimeModule { }
