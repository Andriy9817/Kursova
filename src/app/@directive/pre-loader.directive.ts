import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appPreLoader]'
})
export class PreLoaderDirective implements OnChanges {

  @Input('appPreLoader') isLoad: boolean;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isLoad = changes.isLoad.currentValue;
    if (this.isLoad) {
      this.el.nativeElement.classList.add('preloader');
    } else {
      this.el.nativeElement.classList.remove('preloader');
    }
  }

}
