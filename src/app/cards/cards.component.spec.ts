import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { CardsComponent } from './cards.component';


describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  // import dependency AppComponent, and HttpClientModule into testbed.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsComponent, AppComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`'loading' function testing`, () => {
    //Testing todo item variable
    it('#loading todo item should load the length equal to 4 in each item', () => {
      let total_item = 0;
      component.todoChanged.subscribe(item =>{
        total_item = item;
        component.loadPosts();
        expect(total_item).toBe(4);
      });
    });

    //Testing inprocess item variable
    it('#loading inprocess item should load the length equal to 4 in each item', () => {
      let total_item = 0;
      component.inprocessChanged.subscribe(item =>{
        total_item = item;
        component.loadPosts();
        expect(total_item).toBe(4);
      });
    });

    //Testing done item variable
    it('#loading done item should load the length equal to 4 in each item', () => {
      let total_item = 0;
      component.doneChanged.subscribe(item =>{
        total_item = item;
        component.loadPosts();
        expect(total_item).toBe(4);
      });
    });

    //Testing localStorage item variable
    it('#loading localStorage item should be true', () => {
      let total_item = 0;
      component.storeageChanged.subscribe(item =>{
        total_item = item;
        component.loadPosts();
        expect(total_item).toBeTrue();
      });
    });


  });
});
