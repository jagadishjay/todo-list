import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tastId =3
  todoList=[
    {id:1,"task":"task1"},
    {id:2,"task":"task2"},
    {id:3,"task":"task3"}
  ]

  constructor() { }

  addTodo(taskName:any){
    this.todoList.push({
      "id": this.tastId++,
      'task' : taskName
    })

  }
  deletTodo(index:any){
    this.todoList.splice(index,1)

  }
}
