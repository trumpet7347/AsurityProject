import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/contact', pathMatch: 'full'},
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
