import { Component, OnInit, Input } from '@angular/core';
import {JournalComponent} from './journal.component';
import {JournalService} from '../../services/journal.service';
import {ModelEntry} from "../../services/journal-entry.component";
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
 moduleId: module.id,
  selector: 'app-detailed-journal',
  templateUrl: './detailed-journal.component.html',
  styleUrls: ['./detailed-journal.component.css']
})
export class DetailedJournalComponent implements OnInit {

@Input() modelEntry: ModelEntry;


  constructor(private journalService: JournalService, 
  	private route: ActivatedRoute,
  private location: Location,
  ) {

   }

  ngOnInit():void {
  	
this.route.params
    .switchMap((params: Params) => this.journalService.searchJournalByID(+params['ID']))
    .subscribe(modelEntry => this.modelEntry = modelEntry);


  }
  goBack(): void {
  this.location.back();
}



}
