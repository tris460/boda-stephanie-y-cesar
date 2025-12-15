import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Details } from './components/details/details';
import { Itinerary } from './components/itinerary/itinerary';
import { Location } from './components/location/location';
import { Rsvp } from './components/rsvp/rsvp';
import { Registry } from './components/registry/registry';
import { DressCode } from './components/dress-code/dress-code';
import { Faq } from './components/faq/faq';
import { Contact } from './components/contact/contact';
import { TranslatePipe } from './pipes/translate.pipe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    Details,
    Itinerary,
    Location,
    Rsvp,
    Registry,
    DressCode,
    Faq,
    Contact,
    TranslatePipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'wedding-b-y-e';
}
