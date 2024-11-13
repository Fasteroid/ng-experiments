# zone-js-badness

### Zoneless change detection is the future!

Zone.js detours a lot of Browser APIs for robust change detection.  
Unfortunately this also means it runs change detection a lot, sometimes completely unnecessarily.

The usual way to handle this is with [`NgZone.runOutsideAngular`](https://angular.dev/api/core/NgZone#runOutsideAngular), but that only disables the change detection, *NOT* zone.js itself.  
You still have to deal with its overhead, which regardless of how small, bothers me.

Angular 18 adds [`provideExperimentalZonelessChangeDetection`](https://angular.dev/api/core/provideExperimentalZonelessChangeDetection) for those who don't want to use zone.js change detection.  
It forces you to use [`OnPush` change detection](https://angular.dev/best-practices/skipping-subtrees#using-onpush) anyway, which is more reliable and better for performance.