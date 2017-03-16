import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SalesComponent } from './sales/sales.component';



export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'sales', pathMatch: 'full' },
      { path: 'sales', component: SalesComponent },
      ]
  }
];

export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
