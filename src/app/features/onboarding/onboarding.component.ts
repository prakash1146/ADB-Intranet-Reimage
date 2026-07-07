import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

export interface Topic {
  label: string;
  selected: boolean;
}

export interface HomepageModule {
  id: string;
  name: string;
  desc: string;
  recommended: boolean;
  enabled: boolean;
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
  // 1=welcome 2=personalize 3=review 4=customise 5=loading 6=ready
  step = signal(1);
  totalSteps = 3;
  progressDots = [1, 2, 3];
  activeDotStep = computed(() => Math.min(this.step(), this.totalSteps));

  /* ── User data ──────────────────────────────────────── */
  readonly userName = this.authService.displayName();
  userTitle  = 'Operations Officer';
  userDept   = 'Central and West Asia Department';
  avatarUrl  = 'assets/images/avatar-placeholder.jpg';

  get firstNameOnly(): string {
    return (this.userName || '').split(' ')[0];
  }

  /* ── Step 2: Topics ─────────────────────────────────── */
  freeText = '';

  topics: Topic[] = [
    { label: 'Artificial Intelligence',   selected: false  },
    { label: 'Machine Learning',          selected: false  },
    { label: 'Knowledge Management',      selected: false  },
    { label: 'Climate Risk',              selected: false  },
    { label: 'Procurement',               selected: false  },
    { label: 'Environment',               selected: false  },
    { label: 'Research',                 selected: false },
    { label: 'Policy & Strategy',        selected: false },
    { label: 'South East Asia',          selected: false },
    { label: 'Sustainability',           selected: false },
  ];

  selectedTopics = computed(() => this.topics.filter(t => t.selected).map(t => t.label));

  /* ── Step 3: AI Summary ─────────────────────────────── */
  summary = `Yun Ji is an energy sector specialist focused on the Energy Transition Mechanism (ETM), where she supports the design and implementation of projects accelerating renewable energy adoption across Asia. Her work bridges technical due diligence, sovereign operations, and cross-departmental coordination with finance, policy, and climate teams. Known for her methodical and data-driven approach, she's often tapped for insights on clean-energy transitions and regional energy partnerships.`;

  /* ── Step 4: Homepage modules ───────────────────────── */
  highlightedModule: string | null = null;

  homepageModules: HomepageModule[] = [
    { id: 'quick-access',      name: 'Quick Access',      desc: 'Your favorite links, at your finger tips.',                           recommended: false, enabled: true },
    { id: 'news',              name: 'News',              desc: 'All things ADB, curated for you.',                                    recommended: false, enabled: true },
    { id: 'learnings',         name: 'Learnings',         desc: 'Get course recommendations to further your learnings.',               recommended: true,  enabled: true },
    { id: 'career',            name: 'Career',            desc: 'Be updated of the latest job postings.',                              recommended: true,  enabled: true },
    { id: 'adb-spotlight',     name: 'ADB Spotlight',     desc: 'Discover featured stories, media, and highlights from across ADB.',   recommended: true,  enabled: true },
    { id: 'upcoming-events',   name: 'Upcoming Events',   desc: 'Find out what is happening around you.',                             recommended: true,  enabled: true },
    { id: 'active-discussions',name: 'Active Discussions',desc: 'Get recommendations of people near you.',                            recommended: true,  enabled: true },
  ];

  toggleModule(mod: HomepageModule) { mod.enabled = !mod.enabled; }

  /* ── Step 6: Orbit pills ─────────────────────────────── */
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
