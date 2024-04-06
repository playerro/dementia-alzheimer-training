import { Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {DocumentListComponent} from "./document-list/document-list.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {LinksComponent} from "./links/links.component";
import {SupportComponent} from "./support/support.component";
import {ContactsComponent} from "./contacts/contacts.component";

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'documents', component: DocumentListComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'links', component: LinksComponent },
  { path: 'support', component: SupportComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];
