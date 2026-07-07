import { Component, input, output, signal, ViewEncapsulation } from '@angular/core';
import { HomepageModule } from '../../models/onboarding.models';

@Component({
  selector: 'adb-ob-customise',
  templateUrl: './ob-customise.component.html',
  styleUrl: './ob-customise.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ObCustomiseComponent {
  firstNameOnly   = input.required<string>();
  modules         = input.required<HomepageModule[]>();
  progressDots    = input.required<number[]>();
  activeDotStep   = input.required<number>();

  next            = output<void>();
  prev            = output<void>();
  moduleToggle    = output<HomepageModule>();
  dotClick        = output<number>();

  highlightedModule: string | null = null;
}
