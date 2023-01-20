import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appBorderGreen]',
})
export class BorderGreenDirective implements OnInit {
  @Input() cargo: string = '';
  public cargos: string[] = [
    'Director',
    'Directora',
    'Gerente',
    'Coordinador',
    'Coordinadora',
  ];
  private flag: boolean = false;
  @HostBinding('class.borderGreen') private mostrar: boolean = false;
  @HostListener('click') onclick() {
    if (this.flag) {
      this.mostrar = true;
    }
  }

  constructor() {}
  ngOnInit(): void {
    if (this.cargos.includes(this.cargo)) {
      this.flag = true;
    }
  }
}
