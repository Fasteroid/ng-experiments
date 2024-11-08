import { Component } from '@angular/core';
import { interval } from 'rxjs';

// this component is much nicer on the zoneless branch

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    protected bruh = interval(1000); // this also triggers zone since it calls the detoured setTimeout internally

    protected zone_bait = 0;

    constructor() {
        window.setInterval(() => { // does nothing that would cause a change, but still triggers zone.js
            console.log('bruh');
            this.zone_bait++;
        }, 1000);

        window.setTimeout( () => {
            window.setInterval(() => { // does nothing that would cause a change, but still triggers zone.js
                console.log('moment');
                this.zone_bait++;
            }, 500);
        }, 1000)
    }
}
