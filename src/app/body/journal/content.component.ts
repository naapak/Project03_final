import { Component, OnInit } from '@angular/core';
import {AppShopComponent} from './app-shop.component';
import {AppAdventureComponent} from './app-adventure.component';
import {JournalComponent} from './journal.component';

@Component({
  selector: 'app-content',
  template: `
  <app-app-shop></app-app-shop>
  <app-journal></app-journal>
  <app-app-adventure></app-app-adventure>
  `,
  styles: []
})
export class ContentComponent {




}
