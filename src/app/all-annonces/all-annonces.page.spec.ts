import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllAnnoncesPage } from './all-annonces.page';

describe('AllAnnoncesPage', () => {
  let component: AllAnnoncesPage;
  let fixture: ComponentFixture<AllAnnoncesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllAnnoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
