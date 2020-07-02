import { IPokemonDetail } from '@interfaces/pokemon.interface';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: IPokemonDetail;

  constructor() { }

  ngOnInit() { }

}
