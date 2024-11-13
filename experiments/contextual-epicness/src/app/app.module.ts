import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomContextDirective } from './directives/custom-context/custom-context.directive';

@NgModule({
    declarations: [
        AppComponent,
        CustomContextDirective
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
