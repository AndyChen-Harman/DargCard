import { Component, OnInit, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  // todo, inprocess, and done three columns.
  todo: string[] = [];
  inprocess: string[] = [];
  done: string[] = [];

  // check feedback from httpclient
  tmp: any;

  // EventEmitter for testing the input value
  todoChanged = new EventEmitter();
  inprocessChanged = new EventEmitter();
  doneChanged = new EventEmitter();

  // LocalStorage for testing if website store information
  storeageChanged = new EventEmitter();

  constructor(private http: HttpClient) {}

  // loading input file from http request.
  loadPosts(): void {
    this.http
      .get('http://localhost:3001/users')
      .subscribe((Response) => {
        // Read the previous statement if not empty
        if(localStorage.length !== 0){
          this.storeageChanged.emit(localStorage.length > 0);

          // Get todo, inprocess, and done
          this.todo = localStorage.getItem('todo')?.split(',')!;
          if(this.todo[0]===""){ this.todo = [];}
          this.inprocess = localStorage.getItem('inprocess')?.split(',')!;
          if(this.inprocess[0]===""){this.inprocess = [];}
          this.done = localStorage.getItem('done')?.split(',')!;
          if(this.done[0]===""){this.done = [];}

          // localStorage.clear();
        }else{
          // JSON file parsing
          this.tmp = JSON.stringify(Response);
          this.tmp = JSON.parse(this.tmp);
          let keys = Object.keys(this.tmp);
          let values = keys.map(k => this.tmp[k]);

          // Set up todo, inprocess, and done input
          this.todo = values.map(item => { return item.todo });
          this.inprocess = values.map(item => { return item.process });
          this.done = values.map(item => { return item.done });

          // Testing event emitter
          this.todoChanged.emit(this.todo.length);
          this.inprocessChanged.emit(this.inprocess.length);
          this.doneChanged.emit(this.done.length);
          
        }
      });
  }

  // Drop and drag the card
  drop(event: CdkDragDrop<string[]>): void {
    
    // Darg the card in same container
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    // Drag the card in other container
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    // Save the input in localStorage
    localStorage.setItem('todo', this.todo.toString());
    localStorage.setItem('inprocess', this.inprocess.toString());
    localStorage.setItem('done', this.done.toString());
  }

  // Life cycle initial component
  ngOnInit(): void {
    this.loadPosts();
    
  }
}
