import { Component } from '@angular/core';

@Component({
    selector: 'master-root',
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
})

export class MasterComponent {
    title = "PS";
    constructor() {
        setTimeout(() => {
            this.title = "Todo List App"
        }, 1000);
    }
}