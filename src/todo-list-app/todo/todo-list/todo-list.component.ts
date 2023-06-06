import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo.model';


@Component({
    selector: 'todo-list-child',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
    title = "Todo List Page";
    @Input() todos!: Todo;
    @Output() todoDelete = new EventEmitter<Todo>();
    @Input() index!: number;
    @Output() todoToggle = new EventEmitter<Todo>();

    onDelete(todos: Todo) {
        this.todoDelete.emit(todos);
    }

    onClicked(todos: Todo) {
        this.todoToggle.emit(todos);
    }
}