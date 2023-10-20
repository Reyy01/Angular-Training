import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
//  hero = 'heroooooo';
samp = {id:1, name:'Reyyy',}

hero:Hero = this.samp;
heroes = HEROES;

selectedHero?: Hero;
onSelect(heroo: Hero): void {
  this.selectedHero = heroo;
  console.log(this.selectedHero);
}

 
}