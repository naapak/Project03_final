import { Component } from '@angular/core';
import {NavigationComponent} from './body/navigation/navigation.component';
import {FooterComponent} from './body/footer/footer.component';
import {ContentComponent} from './body/journal/content.component';
import  {EntriesComponent} from './services/entries.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';
}
