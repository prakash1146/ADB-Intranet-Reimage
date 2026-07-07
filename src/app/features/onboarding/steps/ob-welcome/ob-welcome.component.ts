import { Component, input, output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'adb-ob-welcome',
  templateUrl: './ob-welcome.component.html',
  styleUrl: './ob-welcome.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ObWelcomeComponent {
  userName    = input.required<string>();
  userTitle   = input.required<string>();
  userDept    = input.required<string>();
  avatarUrl   = input.required<string>();
  progressDots    = input.required<number[]>();
  activeDotStep   = input.required<number>();

  next            = output<void>();
  skip            = output<void>();
  dotClick        = output<number>();
}
