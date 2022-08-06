import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlListingsComponent } from './url-listings.component';

describe('UrlListingsComponent', () => {
  let component: UrlListingsComponent;
  let fixture: ComponentFixture<UrlListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
