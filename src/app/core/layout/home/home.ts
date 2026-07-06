import { Component, computed, OnInit, signal } from '@angular/core';
import { OnboardingComponent } from '../../../features/onboarding/onboarding.component';

@Component({
  selector: 'adb-home',
  imports: [OnboardingComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
