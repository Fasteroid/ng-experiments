import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

// Claude.ai: "Define the context interface for better type checking and intellisense"
export interface CustomContext {
    $implicit: string;
    number:    number;
}

@Directive({
    selector: '[customContext]'
})
export class CustomContextDirective implements OnInit {

    private context: CustomContext = {
        $implicit: 'hello world',
        number: 1
    };

    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<CustomContext>
    ) {}

    ngOnInit(): void {
        this.viewContainer.createEmbeddedView(this.templateRef, this.context);
    }

    // Claude.ai: "This static method helps with type checking in templates"
    static ngTemplateContextGuard(dir: CustomContextDirective, ctx: unknown): ctx is CustomContext {
        return true;
    }
}