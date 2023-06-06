import { Component } from '@angular/core';

@Component({
    selector: 'about-child',
    template: `<h2 class="text-center">{{title}}</h2>`,
    styles: [`.text-center { color: red; }`]
})

export class AboutComponent {
    title = "About Page";
}