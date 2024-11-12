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
    protected bruh: Observable<number> = interval(1000);
}
