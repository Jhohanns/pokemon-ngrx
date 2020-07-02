import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { IPokemonDetail } from '@interfaces/pokemon.interface';

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
