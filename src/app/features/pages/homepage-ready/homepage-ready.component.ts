import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'adb-homepage-ready',
  imports: [],
  templateUrl: './homepage-ready.component.html',
  styleUrl: './homepage-ready.component.scss'
})
export class HomepageReadyComponent {
  arrowRightUrl = 'https://www.figma.com/api/mcp/asset/093f514d-90d1-4bf6-8b01-4b520d4a02bc';
  circlesUrl    = 'https://www.figma.com/api/mcp/asset/cf881d75-77d0-4c47-bb69-3fa99736d51c';
  avatarUrl     = 'https://www.figma.com/api/mcp/asset/5707d4d5-6f31-41ef-93ef-2d9be81e38ac';

  /* Department tag nodes floating around the avatar */
  tags = [
    { label: 'Information Technology',  opacity: 1,    top: '45.4%', left: '38.4%' },
    { label: 'Technology Enablement',   opacity: 1,    top: '65.5%', left: '59.4%' },
    { label: 'Digital Operations',      opacity: 1,    top: '65.5%', left: '34%'   },
    { label: 'Systems Management',      opacity: 0.7,  top: '21.1%', left: '44.9%' },
    { label: 'Infrastructure',          opacity: 0.7,  top: '27.6%', left: '75.9%' },
    { label: 'Enterprise Tools',        opacity: 0.7,  top: '47.3%', left: '85%'   },
    { label: 'Automation',              opacity: 0.7,  top: '77.5%', left: '70.9%' },
    { label: 'AI Workflows',            opacity: 0.7,  top: '83.9%', left: '49.4%' },
    { label: 'Security',               opacity: 0.7,  top: '77.5%', left: '31.2%' },
    { label: 'Integrations',            opacity: 0.7,  top: '49.5%', left: '18.2%' },
    { label: 'Process Optimization',    opacity: 0.7,  top: '29.9%', left: '15.5%' },
    { label: 'Network Support',         opacity: 0.5,  top: '14.8%', left: '17.6%' },
    { label: 'Access Control',          opacity: 0.5,  top: '5.9%',  left: '49.5%' },
    { label: 'Troubleshooting',         opacity: 0.5,  top: '13.2%', left: '77.3%' },
    { label: 'Service Requests',        opacity: 0.5,  top: '35.6%', left: '95.3%' },
    { label: 'Technical Support',       opacity: 0.5,  top: '62.4%', left: '91.5%' },
    { label: 'Data Handling',           opacity: 0.5,  top: '83.3%', left: '88.1%' },
    { label: 'Internal Platforms',      opacity: 0.5,  top: '97.8%', left: '69%'   },
    { label: 'Collaboration',           opacity: 0.5,  top: '97.8%', left: '32.8%' },
    { label: 'System Reliability',      opacity: 0.5,  top: '74.4%', left: '0%'    },
  ];

  constructor(private router: Router) {}

  startNow() { this.router.navigate(['/dashboard']); }
}
