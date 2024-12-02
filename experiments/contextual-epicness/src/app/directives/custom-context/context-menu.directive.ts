import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgConduit } from 'rxjs-conduit/angular';

// Claude.ai: "Define the context interface for better type checking and intellisense"
export interface CustomContext<T> {
    $implicit: NgConduit<T>;
}

@Directive({
    selector: '[contextMenu]',
    exportAs: 'contextMenu'
})
export class ContextMenuDirective<T> implements OnInit {

    @Input('type') public t!: T;

    private readonly ctx$ = new NgConduit<T>();

    private readonly context: CustomContext<T> = {
        $implicit: this.ctx$
    };

    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef< CustomContext<T> >
    ) {}

    ngOnInit(): void {
        this.viewContainer.createEmbeddedView(this.templateRef, this.context);
    }

    // Claude.ai: "This static method helps with type checking in templates"
    static ngTemplateContextGuard<T>(dir: ContextMenuDirective<T>, ctx: unknown): ctx is CustomContext<T> {
        return true;
    }
}