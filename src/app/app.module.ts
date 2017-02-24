import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './body/navigation/navigation.component';
import { FooterComponent } from './body/footer/footer.component';
import { JournalComponent } from './body/journal/journal.component';
import { ModelEntry } from './services/journal-entry.component';
import { EntriesComponent } from './services/entries.component';
import { AppShopComponent } from './body/journal/app-shop.component';
import { AppAdventureComponent } from './body/journal/app-adventure.component';
import { ContentComponent } from './body/journal/content.component';
import {JournalService} from './services/journal.service' ;
import { AppRoutingModule }   from './app-routing.module';
import { HeaderComponent } from './body/navigation/header.component';
import { AllcompComponent } from './body/journal/allcomp/allcomp.component';
import { DetailedJournalComponent } from './body/journal/detailed-journal.component';
import {JournalEntryComponent} from './body/journal/journal-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    JournalComponent,
    EntriesComponent,
    AppShopComponent,
    AppAdventureComponent,
    ContentComponent,
    HeaderComponent,
    AllcompComponent,
    DetailedJournalComponent,
    JournalEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
