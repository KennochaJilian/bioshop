import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BioshopComponent} from "./bioshop.component";
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";

const routes: Route[] = [
  {
    path: '',
    component: BioshopComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    BioshopComponent,
    HomeComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class BioshopModule { }
