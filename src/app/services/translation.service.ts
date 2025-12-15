import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<string>('es');
  public currentLanguage$ = this.currentLanguage.asObservable();

  private translations: { [lang: string]: Translations } = {
    es: {'rsvp.title': 'Confirma tu asistencia',
      'rsvp.description': 'Tu presencia hará que este día sea aún más especial',
      'rsvp.sending': 'Enviando tu respuesta...',
      'rsvp.wait': 'Por favor espera un momento',
      'rsvp.thanks': '¡Gracias por confirmar tu asistencia!',
      'rsvp.thanks.subtitle': 'Hemos recibido tu respuesta correctamente.',
      'rsvp.send-another': 'Enviar otra respuesta',
      'rsvp.name': 'Nombre completo',
      'rsvp.name.placeholder': 'Ingresa tu nombre completo',
      'rsvp.needed': 'Este campo es obligatorio',
      'rsvp.attending': '¿Asistirás a nuestra boda?',
      'rsvp.yes': 'Sí, estaré ahí',
      'rsvp.no': 'No podré asistir',
      'rsvp.quantity': 'Número de invitados (incluyéndote)',
      'rsvp.1': '1 persona',
      'rsvp.2': '2 personas',
      'rsvp.message': 'Mensaje para los novios (opcional)',
      'rsvp.message.placeholder': 'Comparte tus buenos deseos...',
      'rsvp.confirm': 'Confirmar respuesta',
    },
    en: {
      'nav.home': 'Home',
      'nav.details': 'Details',
      'nav.location': 'Location',
      'nav.dress-code': 'Dress Code',
      'nav.registry': 'Gifts',
      'nav.rsvp': 'RSVP',
      'nav.contact': 'Contact',
      'home.title': 'We’re Getting Married!',
      'details.our-song': 'Our song',
      'details.description': 'With great joy, we want to share this special moment with you',
      'details.date': 'March 28th, 2026',
      'details.days': 'Days',
      'details.time': 'Hours',
      'details.minutes': 'Minutes',
      'details.seconds': 'Seconds',
      'details.text': 'Book the date and join us on this special day!',
      'itinerary.title': 'Day itinerary',
      'itinerary.description': 'Join us for every special moment of our celebration',
      'itinerary.welcome.title': 'Welcome everyone!',
      'itinerary.welcome.description': 'Reception and cocktail',
      'itinerary.ceremony.title': 'Wedding ceremony',
      'itinerary.ceremony.description': 'The most awaited moment, we say "Yes, I accept"!',
      'itinerary.dinner.title': 'Special dinner',
      'itinerary.dinner.description': 'Let’s enjoy a delicious family dinner',
      'itinerary.drink.title': 'A toast to our love',
      'itinerary.drink.description': 'Celebrate our new chapter together',
      'itinerary.dance.title': 'Dance all night long!',
      'itinerary.dance.description': 'The dance floor is ours, let’s celebrate until dawn!',
      'location.title': 'Location',
      'location.description': 'We await you at this beautiful place to celebrate together',
      'location.info': 'Parking available • Easy access',
      'gallery.ny.title': 'New York',
      'gallery.ny.description': 'Where our adventure began',
      'gallery.rd.title': 'Dominican Republic',
      'gallery.rd.description': 'Unforgettable moments in the Caribbean',
      'gallery.co.title': 'Colombia',
      'gallery.co.description': 'Discovering new places together',
      'dress-code.title': 'To take into account',
      'dress-code.subtitle': 'Formal Attire',
      'dress-code.description': 'With much affection, we kindly ask that the color white be EXCLUSIVE to the bride on this very special day.',
      'faq.kids1': 'Although we appreciate your little ones, we have decided to celebrate this moment WITHOUT children.',
      'faq.kids2': 'We hope this decision does not prevent you from attending and celebrating our day.',
      'faq.phone1': 'We want you to experience this moment with us, not through a screen.',
      'faq.phone2': 'Please, put away your cell phone and enjoy with your heart.',
      'gifts.title': 'Gift Registry',
      'gifts.description': 'If you wish to contribute to our future together, we have prepared these options for you.',
      'gifts.note': 'Any contribution will be received with much love and gratitude!',
      'gifts.bank.title': 'Bank Information',
      'gifts.bank.name': 'Holder:',
      'gifts.bank.number': 'Card Number:',
      'gifts.thanks': 'Thank you for being part of our special day!',
      'gifts.copy': 'Text copied successfully!',
      'rsvp.title': 'Confirm your attendance',
      'rsvp.description': 'Your presence will make this day even more special',
      'rsvp.sending': 'Sending your response...',
      'rsvp.wait': 'Please wait a moment',
      'rsvp.thanks': 'Thank you for confirming your attendance!',
      'rsvp.thanks.subtitle': 'We have received your response successfully.',
      'rsvp.send-another': 'Send another response',
      'rsvp.name': 'Full name',
      'rsvp.name.placeholder': 'Enter your full name',
      'rsvp.needed': 'This field is required',
      'rsvp.attending': 'Will you attend our wedding?',
      'rsvp.yes': 'Yes, I will be there',
      'rsvp.no': 'I won’t be able to attend',
      'rsvp.quantity': 'Number of guests (including yourself)',
      'rsvp.1': '1 person',
      'rsvp.2': '2 people',
      'rsvp.message': 'Message for the couple (optional)',
      'rsvp.message.placeholder': 'Share your wishes...',
      'rsvp.confirm': 'Confirm response',
      'contact.title': 'Contact',
      'contact.description': 'Do you have any questions? Feel free to contact us',
      'contact.bride': 'Bride',
      'contact.groom': 'Groom',
      'contact.bridesmaid': 'Bridesmaid',
      'footer.note': 'Celebrating our love',
      'footer.info': 'Information',
      'footer.date': 'Date: March 28th, 2026',
      'footer.place': 'Place: Quinta Sarai',
      'footer.contact': 'Contact',
      'footer.contact.subtitle': 'Questions? Contact us',
      'footer.love': 'With love, B & E',
      'footer.rights': '2025 Bety & Erick - Our special day',
    }
  };

  setLanguage(lang: string) {
    this.currentLanguage.next(lang);
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  translate(key: string): string {
    const lang = this.getCurrentLanguage();
    return this.translations[lang]?.[key] || key;
  }
}