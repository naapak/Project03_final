import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Params }   from '@angular/router';

import { AppShopComponent } from './body/journal/app-shop.component';
import { AppAdventureComponent } from './body/journal/app-adventure.component';
import { JournalComponent } from './body/journal/journal.component';
import {AppComponent} from './app.component';
import { ContentComponent } from './body/journal/content.component';
import { DetailedJournalComponent } from './body/journal/detailed-journal.component';
import {JournalEntryComponent} from './body/journal/journal-entry.component';

const routes: Routes = [
  	// { path: '', redirectTo: '/', pathMatch: 'full' },
   { path: 'shop',  component: AppShopComponent },
   { path: 'adventure',  component: AppAdventureComponent },
   { path: 'journal',  component: JournalComponent },
   {path: '', component: ContentComponent},
   {path: 'journal/:ID', component: DetailedJournalComponent},
   {path: 'journal-entry', component: JournalEntryComponent},
 
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
