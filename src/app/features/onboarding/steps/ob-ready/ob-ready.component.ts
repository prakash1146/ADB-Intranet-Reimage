import { Component, input, output, ViewEncapsulation } from '@angular/core';

export interface OrbitPill {
  label: string;
  x: number;
  y: number;
  delay: string;
  dur: string;
}

@Component({
  selector: 'adb-ob-ready',
  templateUrl: './ob-ready.component.html',
  styleUrl: './ob-ready.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ObReadyComponent {
  avatarUrl   = input.required<string>();
  orbitPills  = input.required<OrbitPill[]>();

  next        = output<void>();
}
