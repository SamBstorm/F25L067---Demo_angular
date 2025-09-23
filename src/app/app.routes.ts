import { Routes } from '@angular/router';
import { Demo1 } from './components/pages/demo1/demo1';
import { Demo2 } from './components/pages/demo2/demo2';
import { Home } from './components/pages/home/home';
import { Commande } from './components/pages/commande/commande';
import { TicketCommande } from './components/pages/ticket-commande/ticket-commande';
import { Demo5Chrono1 } from './components/pages/demo5-chrono1/demo5-chrono1';
import { Demo5Chrono2 } from './components/pages/demo5-chrono2/demo5-chrono2';
import { Demo7API } from './components/pages/demo7-api/demo7-api';

export const routes: Routes = [
    { path : '', redirectTo : 'home', pathMatch : 'full'},
    { path : 'home', component : Home},
    { path : 'demo1', component : Demo1 },
    { path : 'demo2', component : Demo2 },
    { path : 'demo3', component : Commande },
    { path : 'demo4', component : TicketCommande },
    { path : 'demo5chrono1', component : Demo5Chrono1 },
    { path : 'demo5chrono2', component : Demo5Chrono2 },
    { path : 'demo7', component : Demo7API },
];
