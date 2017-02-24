import { Component } from '@angular/core';
import {JournalComponent} from './journal.component';
import {ModelEntry} from "../../services/journal-entry.component";

@Component({
  selector: 'app-journal-entry',
  template: '',
  styles: ['']
})
export class JournalEntryComponent  {

	ModelEntryData: ModelEntry[] = <ModelEntry[]>[];

}
