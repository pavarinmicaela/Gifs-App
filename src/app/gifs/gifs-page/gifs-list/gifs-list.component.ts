import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.css']
})
export class GifsListComponent implements OnInit {

  get results() {
    return this.gifsService.results;
  }

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}
