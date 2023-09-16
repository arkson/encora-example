import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Hero {
  id: number;
  name: string;
  power: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = "assets/hero-data.json";

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}
