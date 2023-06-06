import { Component } from '@angular/core';

import { Todo } from './todo.model';

@Component({
    selector: 'todo-child',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class TodoComponent {
    title = "My Todos";
    todos: Todo[];
    localItem: string | null;
    constructor() {
        this.localItem = localStorage.getItem("todos");
        if (this.localItem == null) {
            this.todos = [];
        }
        else {
            this.todos = JSON.parse(this.localItem);
        }
    }

    addTodo(todos: Todo) {
        this.todos.push(todos);
        console.log(todos, "Added");
        localStorage.setItem("todos", JSON.stringify(this.todos));
    } 

    toggleTodo(todos: Todo) {
        const index = this.todos.indexOf(todos);
        this.todos[index].active = !this.todos[index].active;
        console.log(todos, "Toggled");
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    deleteTodo(todos: Todo) {
        const index = this.todos.indexOf(todos);
        this.todos.splice(index, 1);
        console.log(todos, "Deleted");
        localStorage.setItem("todos", JSON.stringify(this.todos));
    }
}