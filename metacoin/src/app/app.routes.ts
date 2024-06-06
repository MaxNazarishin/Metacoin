import { Routes } from '@angular/router';
import { MainComponent } from './content/main/main.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import { CoinlistComponent } from './content/coinlist/coinlist.component';
import { AuthorizationComponent } from './content/authorization/authorization.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';
export const routes: Routes = [
   { path: '', component: MainComponent },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'coinlist', component: CoinlistComponent },
   { path: 'authorization', component: AuthorizationComponent },
   { path: '**', component: PageNotFoundComponent },
];
