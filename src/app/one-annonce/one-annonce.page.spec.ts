import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneAnnoncePage } from './one-annonce.page';

describe('OneAnnoncePage', () => {
  let component: OneAnnoncePage;
  let fixture: ComponentFixture<OneAnnoncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OneAnnoncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
