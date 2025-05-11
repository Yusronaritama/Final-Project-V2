import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingScreenPage } from './loading-screen.page';

const routes: Routes = [
  {
    path: '',
    component: LoadingScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingScreenPageRoutingModule {}
