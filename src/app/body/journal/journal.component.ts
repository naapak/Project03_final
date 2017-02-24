import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';
import {ModelEntry} from "../../services/journal-entry.component";
import {DetailedJournalComponent} from './detailed-journal.component';
import {JournalEntryComponent} from './journal-entry.component';
declare var $:any;
 

@Component({
  moduleId: module.id,
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit{

  // postJournalEntry: ModelEntry;
  SelectedJournal: ModelEntry;
	ModelEntryData: ModelEntry[] = <ModelEntry[]>[];

  constructor(private journalService: JournalService, )  { 

  }


ngOnInit(): void{

	this.journalData();
	}
	

journalData(): void {

	let JournalDataFromserver: Promise<ModelEntry[]> = this.journalService.getJournalData().catch((err) => {
  console.log('errored');
});

	JournalDataFromserver.then(
		modelEntry => { this.ModelEntryData = <ModelEntry[]>modelEntry; 
      // console.log("data:=" + modelEntry); 
		}).then(run =>{this.owlCarousel();}).catch((err) => {
  console.log('errored');
});;
	
}


viewDetailedJournal(modelEntry: ModelEntry): void {


  this.SelectedJournal = modelEntry;
  

}

owlCarousel() { $(document).ready(function(){
    // console.log("iam here in the carousel vjhvjhv");
            $('.owl-carousel').owlCarousel({
              loop:true,
              margin:10,
              responsiveClass:true,
              responsive:{
                  0:{
                      items:1,
                      nav:true
                  },
                  600:{
                      items:2,
                      nav:false
                  },
                  1050:{
                      items:4,
                      nav:true,
                      loop:false
                    }
                }
            })

        });

}

 
}

