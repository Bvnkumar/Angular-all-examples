import {Directive,ElementRef} from '@angular/core';

@Directive({
    selector:'[color-change]'
})
export class ColorDirective{
constructor(private ele:ElementRef){
this.ele.nativeElement.style.backgroundColor = "gray";
}
}