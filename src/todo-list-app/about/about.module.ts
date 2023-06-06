import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';

@NgModule({
    declarations: [AboutComponent],
    imports: [
        CommonModule,
        AboutRoutingModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AboutComponent]
})

export class AboutModule {

}