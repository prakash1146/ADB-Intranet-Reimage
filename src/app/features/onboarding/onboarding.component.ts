import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

export interface Topic {
  label: string;
  aiSelected: boolean;
  selected: boolean;
}

@Component({
  selector: 'adb-onboarding',
  imports: [FormsModule],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent {
  private readonly authService = inject(AuthService);

  /* ── Step state ──────────────────────────────────────── */
  step = signal(1);         // 1=welcome 2=personalize 3=review 4=loading 5=ready
  totalSteps = 3;
  activeDotStep = computed(() => Math.min(this.step(), this.totalSteps));

  /* ── User data ──────────────────────────────────────── */
  readonly userName = this.authService.displayName();
  userTitle  = 'Operations Officer';
  userDept   = 'Central and West Asia Department';
  avatarUrl  = 'assets/images/avatar-placeholder.jpg';

  /* ── Step 2: Topics — matches Figma chips ───────────── */
  freeText = '';

  topics: Topic[] = [
    { label: 'Artificial Intelligence', aiSelected: true,  selected: true  },
    { label: 'Machine Learning',        aiSelected: true,  selected: true  },
    { label: 'Knowledge Management',    aiSelected: true,  selected: true  },
    { label: 'Climate Risk',            aiSelected: true,  selected: true  },
    { label: 'Procurement',             aiSelected: true,  selected: true  },
    { label: 'Environment',             aiSelected: true,  selected: true  },
    { label: 'Research',                aiSelected: false, selected: false },
    { label: 'Policy & Strategy',       aiSelected: false, selected: false },
    { label: 'South East Asia',         aiSelected: false, selected: false },
    { label: 'Sustainability',          aiSelected: false, selected: false },
  ];

  selectedTopics = computed(() => this.topics.filter(t => t.selected).map(t => t.label));

  /* ── Step 3: AI Summary ─────────────────────────────── */
  summary = `Yun Ji is an energy sector specialist focused on the Energy Transition Mechanism (ETM), where she supports the design and implementation of projects accelerating renewable energy adoption across Asia. Her work bridges technical due diligence, sovereign operations, and cross-departmental coordination with finance, policy, and climate teams. Known for her methodical and data-driven approach, she's often tapped for insights on clean-energy transitions and regional energy partnerships.`;

  /* ── Step 5: Orbit pills ─────────────────────────────── */
  orbitPills = computed(() => {
    const selected = this.topics.filter(t => t.selected);
    return selected.map((t, i) => {
      const angle = (i / selected.length) * 2 * Math.PI - Math.PI / 2;
      const r = i % 2 === 0 ? 130 : 170;
      return {
        label: t.label,
        x: Math.round(Math.cos(angle) * r),
        y: Math.round(Math.sin(angle) * r),
        delay: (i * 0.5).toFixed(1),
        dur:   (4.8 + (i % 3) * 0.4).toFixed(1),
      };
    });
  });

  constructor(private router: Router) {}

  /* ── Navigation ──────────────────────────────────────── */
  nextStep() {
    const s = this.step();
    if (s === 3) {
      this.step.set(4);
      setTimeout(() => this.step.set(5), 2800);
    } else if (s === 5) {
      this.router.navigate(['/dashboard']);
    } else {
      this.step.set(s + 1);
    }
  }

  undo() {
    if (this.step() > 1) this.step.update(s => s - 1);
  }

  skipSetup() { this.router.navigate(['/dashboard']); }

  navigateToStep(d: number) { this.step.set(d); }

  toggleTopic(topic: Topic) { topic.selected = !topic.selected; }
}
