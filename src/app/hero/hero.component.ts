import { Component, OnInit } from '@angular/core';
import { Hero, HeroService } from "../hero.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((data) => {
      this.heroes = data;
    });
  }
}
