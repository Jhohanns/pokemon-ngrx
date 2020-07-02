import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'list',
        component: PokemonListComponent,
    },
    {
        path: '',
        redirectTo: 'list'
    },
    {
        path: 'detail',
        component: PokemonDetailComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PokemonRoutingModule { }
