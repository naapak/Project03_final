import { Component, OnInit } from '@angular/core';
import {ModelEntry} from './journal-entry.component';
import {JournalService} from './journal.service';

@Component({
  selector: 'app-entries',
  template: `
    <p>
      entries Works!
    </p>
  `,
  styles: []
})
export class EntriesComponent implements OnInit {

  modelEntry: ModelEntry[];

  constructor(modelEntry: ModelEntry[]) { 
   
    this.modelEntry = modelEntry;
    console.log(this.modelEntry);

  }

  ngOnInit() {
  }

}
