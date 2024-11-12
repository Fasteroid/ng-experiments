import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [AsyncPipe]
})
export class AppComponent {
    protected bruh = interval(1000); // observable

    protected zone_bait = 0;

    constructor() {
        window.setInterval(() => { // does nothing, but will it trigger zone?
            console.log('bruh');
            this.zone_bait++;
        }, 1000);

        window.setTimeout( () => {
            window.setInterval(() => { // does nothing, but will it trigger zone?
                console.log('moment');
                this.zone_bait++;
            }, 500);
        }, 1000)
    }
}
