import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainComponent } from './Components/main/main.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: MainComponent},
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
