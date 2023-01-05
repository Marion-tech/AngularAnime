import { Component, Input, OnInit } from '@angular/core';
import { IAnime } from '../../models/anime.model';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {
  @Input() anime !: IAnime;
  public toto ?: string;

  ngOnInit() {
    console.log(this.anime);
  }
}
