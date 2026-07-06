import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'adb-personalize',
  imports: [FormsModule],
  templateUrl: './personalize.component.html',
  styleUrl: './personalize.component.scss'
})
export class PersonalizeComponent {
  arrowRightUrl = 'https://www.figma.com/api/mcp/asset/21d46c30-c0f5-4712-ab80-6cc71c664e42';

  topics = [
    'Artificial Intelligence', 'Machine Learning', 'Knowledge Management',
    'Climate Risk', 'Procurement', 'Environment', 'Research',
    'Policy & Strategy', 'South East Asia', 'Sustainability'
  ];

  selectedTopics = new Set<string>(['Artificial Intelligence', 'Machine Learning', 'Climate Risk']);

  freeText = '';

  constructor(private router: Router) {}

  toggleTopic(topic: string) {
    if (this.selectedTopics.has(topic)) {
      this.selectedTopics.delete(topic);
    } else {
      this.selectedTopics.add(topic);
    }
  }

  isSelected(topic: string) {
    return this.selectedTopics.has(topic);
  }

  next() {
    this.router.navigate(['/review-profile']);
  }
}
