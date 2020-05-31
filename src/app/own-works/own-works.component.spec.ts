import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OwnWorksComponent} from "@app/own-works/own-works.component";


describe('OwnWorksComponent', () => {
  let component: OwnWorksComponent;
  let fixture: ComponentFixture<OwnWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OwnWorksComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
