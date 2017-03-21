// a simple service
import { Injectable } from '@angular/core';

@Injectable()
export class LanguagesService {
  public get() {
    return ['en', 'es', 'fr'];
  }
}
