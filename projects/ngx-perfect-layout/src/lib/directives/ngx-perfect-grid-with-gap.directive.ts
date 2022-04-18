import { Directive, ElementRef, Input } from "@angular/core";

@Directive({ selector: '[ngxPerfectGridWithGap]' })
export class NgxPerfectGridWithGapDirective {

    @Input()
    public ngxPerfectGridWithGap: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 3;

    constructor(private _eleRef: ElementRef) {

        const nativeElement = (_eleRef.nativeElement as HTMLElement);
        nativeElement.classList.add(`grid`);
        nativeElement.classList.add(`gap-${this.ngxPerfectGridWithGap}`);

    }

}