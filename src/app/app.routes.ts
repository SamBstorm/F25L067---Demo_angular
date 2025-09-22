import { Routes } from '@angular/router';
import { Demo1 } from './components/pages/demo1/demo1';
import { Demo2 } from './components/pages/demo2/demo2';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
    { path : '', redirectTo : 'home', pathMatch : 'full'},
    { path : 'home', component : Home},
    { path : 'demo1', component : Demo1 },
    { path : 'demo2', component : Demo2 }
];
