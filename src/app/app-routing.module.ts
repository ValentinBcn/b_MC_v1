import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import components to route

const routes: Routes = [
    // { path: '', redirectTo: '/index', pathMatch: 'full' },

    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
