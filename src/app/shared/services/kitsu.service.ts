import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IAnime, IKitsuData } from '../models/anime.model';
import { IGenre, IKitsuGenre } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class KitsuService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAnime(): Observable<IAnime[]> {
    return this.httpClient.get<IKitsuData>('https://kitsu.io/api/edge/anime').pipe(
      map(data => {
        var result = data.data.map((anime: IAnime) => {
          var temp = anime;
          anime.genres$ = this.getGenreByAnimeId(anime.id);
          return temp;
        });
        return result;
      })
    );
  }

  public getGenreByAnimeId(id: string) : Observable<IGenre[]>{
    let _url = `https://kitsu.io/api/edge/anime/${id}/genres`;
    return this.httpClient.get<IKitsuGenre>('https://kitsu.io/api/edge/anime/' + id + '/genres').pipe(
      map(res => res.data)
    );
  } 

  public getAllGenre(): Observable<IGenre[]> {
    return this.httpClient.get<IKitsuGenre>('https://kitsu.io/api/edge/genres?page[limit]=500&page[offset]=0').pipe(
      map(res => res.data)
    );
  }
}
