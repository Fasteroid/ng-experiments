# contextual-epicness

### Those contextual values that structural directives can seamlessly provide are pretty cool!

But actual documentation on how to design your own? &nbsp;Not exactly obvious.  
This experiment shows how to do that.

```html
<div *customContext="let context, let num = number">
    {{context}} {{num}}
</div>
```
