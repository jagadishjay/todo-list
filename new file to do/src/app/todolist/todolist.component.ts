import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor( private ts: TodoService) { }
  todos: { id: number; task: string; }[] | undefined ;

  ngOnInit(): void {
    this.todos=this.ts.todoList
  }
  removeTodo(index:any){
    this.ts.deletTodo(index)
  }

}
