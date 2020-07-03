import { AuthGuard } from '@guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'pokemon',
        loadChildren: () => import('./modules/pokemon/pokemon.module').then((m) => m.PokemonModule),
        canLoad: [AuthGuard], canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: '/auth/login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
