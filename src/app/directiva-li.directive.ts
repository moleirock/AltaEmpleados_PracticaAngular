import { Directive, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[directivaLi]'
})
export class DirectivaLiDirective {

  constructor(private el:ElementRef,private renderer:Renderer2) {
    renderer.setStyle(el.nativeElement,"list-style","none");
   }

}
