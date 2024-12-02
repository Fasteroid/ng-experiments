import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomContextDirective } from './directives/custom-context/custom-context.directive';
import { ContextMenuDirective } from './directives/custom-context/context-menu.directive';

@NgModule({
    declarations: [
        AppComponent,
        CustomContextDirective,
        ContextMenuDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
