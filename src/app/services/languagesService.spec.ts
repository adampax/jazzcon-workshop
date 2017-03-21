import { inject, TestBed } from '@angular/core/testing';
import { LanguagesService } from './languagesService';

describe('Service: LanguagesService', () => {
  let service;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [ LanguagesService ]
  }));

  beforeEach(inject([LanguagesService], (s) => {
    service = s;
  }));

  it('should return available languages', () => {
    let languages = service.get();
    expect(languages).toContain('en');
    expect(languages).toContain('es');
    expect(languages).toContain('fr');
    expect(languages.length).toEqual(3);
  });
});
