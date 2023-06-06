import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MasterRoutingModule } from './master-routing.module';

import { MasterComponent } from './master.component';

@NgModule({
    declarations: [
        MasterComponent
    ],
    imports: [
        BrowserModule,
        MasterRoutingModule
    ],
    providers: [],
    bootstrap: [MasterComponent]
})

export class MasterModule {

}