import { Injectable } from '@angular/core';
import {ModelEntry} from './journal-entry.component';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class JournalService {

  

  private baseKey = `94a08da1fecbb6e8b46990538c7b50b2`;
  private baseUrl = `http://portal.helloitscody.com/inhabitent/api/get/${this.baseKey}/`;
  private searchParams = `params=[{"name":"posts_per_page","value":"5"},{"name":"paged","value":"1"}]`;
  private JournalUrl = this.baseUrl+"?"+encodeURI(this.searchParams);

  private JournalArray: ModelEntry[] = <ModelEntry[]>[];
  private JournalById: ModelEntry;

	constructor(private http:Http) { console.log(); }

 getJournalData(): Promise<ModelEntry[]> {
 	// request the data from the url.
 	
 	// let journalArray: ModelEntry[] = this.JournalArray;
 	// console.log(journalArray);
 	 return this.http.get(this.JournalUrl).toPromise()
 	.then(response => {
 		let returnedResponse = response.json();
 		// console.log (returnedResponse);
 		
 		let compareKeys = (a,b) => {
 			let aKey = Object.keys(a).sort();
 			let bKey = Object.keys(b).sort();

 			return JSON.stringify(aKey).toLowerCase() === JSON.stringify(bKey).toLowerCase();
 		};
 		let KeysToCompare = new ModelEntry();
 		// console.log(KeysToCompare);
 		for ( let prop in returnedResponse) {
 			// console.log("i am in the loop");
 			let currentObject: ModelEntry = <ModelEntry> returnedResponse[prop];
             
                if (compareKeys(currentObject, KeysToCompare)){
                	// console.log("iam here in if statement");
                    this.JournalArray.push(currentObject);
                    // console.log(this.JournalArray);

 		}}
 		return this.JournalArray;
 	})
 	.catch(this.handleError);
 	

 }
 
 searchJournalByID(ID: number):Promise<ModelEntry> {

   console.log(ID);

return this.getJournalData()
             .then(JournalArray => JournalArray.find(ModelEntry => ModelEntry.ID == ID)


               );
 }

private handleError (error:any): Promise<any> {
	console.log('an error occured',error);
	return Promise.reject(error.message || error);
 }

 //getSingleJournalData(): Promise<ModelEntry> {}


}
