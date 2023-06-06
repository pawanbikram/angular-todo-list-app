import { Component, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
    selector: 'todo-add-child',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.css']
})

export class TodoAddComponent {
    title = "Todo Add Page";
    todos: Todo;
    @Output() todoAdd = new EventEmitter<Todo>();
    constructor() {
        this.todos = new Todo();
    }

    onSubmit() {
        this.todoAdd.emit(this.todos);
        this.todos = new Todo();
    }
}