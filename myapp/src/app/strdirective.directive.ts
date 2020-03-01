import { Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';


@Directive({
  selector: '[appStrdirective]'
})
export class StrdirectiveDirective {

  constructor(private tr:TemplateRef<any>, private vc:ViewContainerRef) { }

    @Input() set appStrdirective(val:Boolean)
    {
      if(val)
      {
        this.vc.createEmbeddedView(this.tr)
      }
      else
      {
        this.vc.clear();
      }
    }
  }
