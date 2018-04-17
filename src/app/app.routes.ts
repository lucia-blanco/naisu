import {RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  HomeComponent,
  PostComponent,
} from './components/index.pages';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'item/:id', component: PostComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
