import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  // this commented implementation does not close dropdown when user click anywhere of the dom

  /*@HostBinding('class.open') isOpen = false;
  constructor() { }
  @HostListener('click') toggleOpen()
  {
    this.isOpen = !this.isOpen;
  }*/


  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {
  }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}
