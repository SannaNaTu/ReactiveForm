import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormComponent} from './form/form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/form', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  // aina alin
  {path: '**', component: PageNotFoundComponent}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
