import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingScreenPage } from './loading-screen.page';

describe('LoadingScreenPage', () => {
  let component: LoadingScreenPage;
  let fixture: ComponentFixture<LoadingScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
