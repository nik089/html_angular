import { Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {
  @HostBinding('style.color')myColor;
  @HostBinding('style.border')myBorder;

  constructor(private er:ElementRef) {
    this.er.nativeElement.style.color="red";
    this.er.nativeElement.style.border="2px solid green";
   }
   @HostListener('mouseover')onmouseover()
   {
     this.myColor="purple";
   } 

   @HostListener('mouseleave')onmouseleave()
   {
     this.myBorder="2px solid red";
   }  
  

}
