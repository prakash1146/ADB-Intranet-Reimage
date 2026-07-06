import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

export interface Module {
  id: string;
  title: string;
  desc: string;
  badge: 'default' | 'recommended';
  checked: boolean;
  disabled?: boolean;
}

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
  step = signal(1);           // 1=welcome 2=tell-us 3=customise 4=loading 5=ready
  totalSteps = 3;
  activeDotStep = computed(() => Math.min(this.step(), this.totalSteps));

  /* ── User data ──────────────────────────────────────── */
  readonly userName  = this.authService.displayName();
  userTitle = 'Operations Officer';
  userDept  = 'Central and West Asia Department';
  /* Use a publicly available placeholder face */
  avatarUrl = 'https://www.figma.com/api/mcp/asset/75576cbe-deb7-4dfa-b6e9-5be5cca27e57';

  /* ── Step 2: Topics ─────────────────────────────────── */
  freeText = '';
  summary  = `You're an Operations Officer in the Central and West Asia Department with a strong focus on Operations, Policy & Strategy, and Knowledge Management. Your work spans HR & Talent, Finance, Procurement, and Environmental considerations across the region. Beyond your core role, you bring a keen interest in Sustainable Development, Change Management, and Climate Technology — areas that reflect how you think about development impact and the communities your projects serve.`;

  topics: Topic[] = [
    { label: 'Operations',           aiSelected: true,  selected: true  },
    { label: 'Finance',              aiSelected: true,  selected: true  },
    { label: 'HR & Talent',          aiSelected: true,  selected: true  },
    { label: 'Legal',                aiSelected: false, selected: false },
    { label: 'IT & Systems',         aiSelected: false, selected: false },
    { label: 'Research',             aiSelected: false, selected: false },
    { label: 'Policy & Strategy',    aiSelected: true,  selected: true  },
    { label: 'Procurement',          aiSelected: true,  selected: true  },
    { label: 'Environment',          aiSelected: true,  selected: true  },
    { label: 'Communications',       aiSelected: false, selected: false },
    { label: 'Partnerships',         aiSelected: false, selected: false },
    { label: 'Knowledge Management', aiSelected: true,  selected: true  },
  ];

  selectedTopics = computed(() => this.topics.filter(t => t.selected).map(t => t.label));

  /* ── Step 3: Modules ─────────────────────────────────── */
  modules: Module[] = [
    { id: 'quick-access',      title: 'Quick Access',       desc: 'Your favourite links, at your fingertips.',             badge: 'default',     checked: true, disabled: true },
    { id: 'news',              title: 'News',                desc: 'All things ADB, curated for you.',                      badge: 'default',     checked: true, disabled: true },
    { id: 'learnings',         title: 'Learnings',           desc: 'Get course recommendations to further your learnings.', badge: 'recommended', checked: true },
    { id: 'career',            title: 'Career',              desc: 'Be updated on the latest job postings.',                badge: 'recommended', checked: true },
    { id: 'adb-spotlight',     title: 'ADB Spotlight',       desc: 'Featured content and perspectives from across ADB.',    badge: 'recommended', checked: true },
    { id: 'upcoming-events',   title: 'Upcoming Events',     desc: 'Find out what is happening around you.',                badge: 'recommended', checked: true },
    { id: 'active-discussions',title: 'Active Discussions',  desc: 'Join the conversations happening across ADB.',          badge: 'recommended', checked: true },
  ];

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

  skipSetup() { this.router.navigate(['/dashboard']); }
  undo()      { if (this.step() > 1) this.step.update(s => s - 1); }

  toggleTopic(topic: Topic)   { topic.selected = !topic.selected; }
  toggleModule(mod: Module)   { if (!mod.disabled) mod.checked = !mod.checked; }
  navigateToStep(d:any){
    this.step.set(d);
  }
}
