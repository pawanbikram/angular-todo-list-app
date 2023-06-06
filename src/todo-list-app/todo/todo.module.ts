import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
    declarations: [
        TodoComponent,
        TodoAddComponent,
        TodoListComponent
    ],
    imports: [
        CommonModule,
        TodoRoutingModule,
        FormsModule
    ],
    exports: [],
    providers: [],
    bootstrap: [TodoComponent]
})

export class TodoModule {

}