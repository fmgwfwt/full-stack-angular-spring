import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateUserListComponent } from './update-user-list.component';



describe('UserProfileComponent', () => {
  let component: UpdateUserListComponent;
  let fixture: ComponentFixture<UpdateUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
