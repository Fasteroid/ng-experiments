import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it("should load the values", async () => { // ensure <h1> == 'hello world 1' 
        const fixture = TestBed.createComponent(AppComponent);
        
        await fixture.whenStable();
        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;
        expect( compiled.querySelector('h1')?.textContent ).toContain('hello world 1');
    });
});
