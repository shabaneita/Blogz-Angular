import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsListComponent } from './user-details-list.component';

describe('UserDetailsListComponent', () => {
  let component: UserDetailsListComponent;
  let fixture: ComponentFixture<UserDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
