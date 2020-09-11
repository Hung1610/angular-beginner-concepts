import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleRoutingModule } from './modules/example/example-routing.module';
import { Example2RoutingModule } from './modules/example2/example2-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule,
    ExampleRoutingModule,
    Example2RoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
