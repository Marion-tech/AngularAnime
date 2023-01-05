import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { combineLatest, debounceTime, map, Observable, startWith, take } from 'rxjs';
import { IAnime } from '../shared/models/anime.model';
import { IGenre } from '../shared/models/genre.model';
import { KitsuService } from '../shared/services/kitsu.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent {
  public dataSource$: Observable<IAnime[]>;
  public dataGenres$: Observable<IGenre[]>;
  public formGroup: FormGroup = new FormGroup({
    search: new FormControl(''),
    searchGenre: new FormControl(),
  });

  constructor(
    private kitsuService: KitsuService,
  ) {
    this.dataGenres$ = this.kitsuService.getAllGenre();
    this.dataSource$ = combineLatest([
      this.kitsuService.getAnime(),
      this.formGroup.valueChanges.pipe(
        debounceTime(500),
        startWith(this.formGroup.getRawValue())
      )
    ]).pipe(
      map(([animes, form]: [IAnime[], {search: string; searchGenre: number}]) => {
        return animes
          .filter((anime: IAnime) => anime.attributes.canonicalTitle.toLowerCase().includes(form?.search.toLowerCase()));
      })
    )
  }
}