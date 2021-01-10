import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todos/todo/todo.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import {TodoStore} from './todos/state/todo.store';
import {TodoQuery} from './todos/state/todo.query';
import { NewTodoComponent } from './todos/todo/new-todo/new-todo.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import { TodoItemComponent } from './todos/todo/todo-item/todo-item.component';
import { TodoStatusComponent } from './todos/todo/todo-item/todo-status/todo-status.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NewTodoComponent,
    TodoItemComponent,
    TodoStatusComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [TodoStore, TodoQuery],
  bootstrap: [AppComponent]
})
export class AppModule { }
