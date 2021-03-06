import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public user = new BehaviorSubject(null);
  public admin = new BehaviorSubject(null);
  public cart = new BehaviorSubject({});
  public order = new BehaviorSubject({});
  public searchTerm = new BehaviorSubject('');

  public slugify(text: string) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  public hashCode(input: string) {
    let hash = 0, i, chr;
    if (input.length === 0) return hash;
    for (i = 0; i < input.length; i++) {
      chr   = input.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  public states = [
    { name: 'Nairobi', abbreviation: 'NRB'},
    { name: 'Nakuru', abbreviation: 'NKR'},
    { name: 'Mombasa', abbreviation: 'MBS'},
    { name: 'Kisumu', abbreviation: 'KSM'},
  ];

  public orderStatuses = [
    { id: 'SUBMITTED'},
    { id: 'PAID'},
    { id: 'SHIPPED'},
    { id: 'DELIVERED'},
    { id: 'EXCEPTION'},
  ];
}