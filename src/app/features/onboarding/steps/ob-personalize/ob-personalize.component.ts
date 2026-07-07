import { Component, input, output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Topic } from '../../models/onboarding.models';

@Component({
  selector: 'adb-ob-personalize',
  imports: [FormsModule],
  templateUrl: './ob-personalize.component.html',
  styleUrl: './ob-personalize.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ObPersonalizeComponent {
  topics          = input.required<Topic[]>();
  freeText        = input.required<string>();
  progressDots    = input.required<number[]>();
  activeDotStep   = input.required<number>();

  next            = output<void>();
  prev            = output<void>();
  topicToggle     = output<Topic>();
  freeTextChange  = output<string>();
  dotClick        = output<number>();
}
