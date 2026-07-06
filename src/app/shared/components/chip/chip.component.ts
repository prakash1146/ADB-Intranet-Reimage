import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'adb-chip',
  imports: [NgClass],
  template: `
    <div class="chip" [ngClass]="'chip--' + color">
      <span class="chip__label">{{ label }}</span>
    </div>
  `,
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  @Input() label = '';
  @Input() color: 'primary' | 'default' = 'primary';
}
