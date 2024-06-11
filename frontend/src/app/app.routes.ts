import { Routes } from '@angular/router';
import { EnonceComponent } from './components/enonce/enonce.component';
import { DemoComponent } from './components/demo/demo.component';

export const routes: Routes = [
    {path: 'enonce', component: EnonceComponent},
    {path: 'demo', component: DemoComponent},
    {path: '', redirectTo: 'enonce', pathMatch: 'full'}
];
