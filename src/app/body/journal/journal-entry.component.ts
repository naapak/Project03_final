import { Component, OnInit } from '@angular/core';
import {JournalComponent} from './journal.component';
import {ModelEntry} from "../../services/journal-entry.component";
import {JournalService} from '../../services/journal.service';

@Component({
  selector: 'app-journal-entry',
  template: `
  <h1 class="black marginBottom textCenter bold"> Post your Blog here </h1>
  <form>
    <label class="marginBottom">Author:</label> <input #journalAuthor />
    <div class="marginBottom">
    	<label>Title:</label> <input #journalTitle />
    </div>
    <div class="marginBottom">
    	<label>Image URL:</label> <input #journalImage/>
  	</div>
	<div class="marginBottom">
		<label>Content:</label> <input #journalContent />
	</div>
		<label>Categories:</label> <input #journalCategories />
	<div class="marginBottom">
		<button class="greenButton marginBottom" (click)="submit(journalAuthor.value,journalTitle.value,journalImage.value,journalContent.value,journalCategories.value)">submit</button>
	</div>
	</form>
  `,
  styles: ['']
})
export class JournalEntryComponent implements OnInit{
	Journals: ModelEntry[];
	newEntry: ModelEntry;
constructor (private journalService: JournalService ){

}

ngOnInit(){
}

submit(author: string, title: string ,image: string,content: string ,categories: string[]): void {
if (!author) { return; }
this.journalService.postJournalToServer(author,title,image,content,categories)
    .then(newEntry => {
      this.Journals.push(newEntry);
      
    }).catch((err) => {
  console.log('errored');
});

}

}
