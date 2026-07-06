import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChipComponent } from '../../../shared/components/chip/chip.component';

@Component({
  selector: 'adb-review-profile',
  imports: [ChipComponent],
  templateUrl: './review-profile.component.html',
  styleUrl: './review-profile.component.scss'
})
export class ReviewProfileComponent {
  arrowRightUrl = 'https://www.figma.com/api/mcp/asset/12b9f9e9-e63d-4c9d-8659-026295cfd075';
  sparklesUrl   = 'https://www.figma.com/api/mcp/asset/e35781d4-b0c6-48e1-8137-ec69e49b661e';
  undoIconUrl   = 'https://www.figma.com/api/mcp/asset/68b8a36d-54eb-4e0e-b216-6b69bfd55611';
  wandUrl       = 'https://www.figma.com/api/mcp/asset/61e4bf3f-7c4a-45e1-9981-d16259835251';

  summary = `Yun Ji is an energy sector specialist focused on the Energy Transition Mechanism (ETM), where she supports the design and implementation of projects accelerating renewable energy adoption across Asia. Her work bridges technical due diligence, sovereign operations, and cross-departmental coordination with finance, policy, and climate teams. Known for her methodical and data-driven approach, she's often tapped for insights on clean-energy transitions and regional energy partnerships.`;

  chips = [
    'Artificial Intelligence', 'Machine Learning', 'Knowledge Management',
    'Climate Risk', 'Procurement', 'Environment', 'Research',
    'Policy & Strategy', 'South East Asia', 'Sustainability'
  ];

  constructor(private router: Router) {}

  undo()       { this.router.navigate(['/personalize']); }
  regenerate() { /* AI regenerate hook */ }
  next()       { this.router.navigate(['/loading']); }
}
