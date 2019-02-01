import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { AdvancedsearchComponent } from './components/advancedsearch/advancedsearch.component';

//Creates all routes for the components
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'favourite', component: FavouriteComponent },
    { path: 'advancedsearch', component: AdvancedsearchComponent },
    { path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);