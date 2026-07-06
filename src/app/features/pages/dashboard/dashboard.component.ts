import { Component } from '@angular/core';

@Component({
  selector: 'adb-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userName = 'Jane Doe';
  userTitle = 'Senior IT Specialist';
  userDepartment = 'Information Technology Department (ITD)';

  /* Asset URLs from Figma (Property 1=3 node) */
  avatarUrl     = 'https://www.figma.com/api/mcp/asset/93482e9f-ca64-46c0-83dd-5b6d5da68e5d';
  sparklesUrl   = 'https://www.figma.com/api/mcp/asset/ca185ec3-acc6-4cdd-b03d-6feff3e5ff68';
  starUrl       = 'https://www.figma.com/api/mcp/asset/7433a5c0-8913-43e6-9523-4467b76241a8';
  paperclipUrl  = 'https://www.figma.com/api/mcp/asset/e8cc995b-f684-477a-98da-88abdb13553e';
  deviceUrl     = 'https://www.figma.com/api/mcp/asset/931d6fe2-f1b9-4325-a764-1c00cf136e4f';

  recentItems = [
    { label: 'Q3 Digital Transformation Report', icon: 'doc' },
    { label: 'IT Infrastructure Roadmap 2025',   icon: 'doc' },
    { label: 'Cloud Migration Strategy',          icon: 'doc' },
  ];

  quickLinks = [
    'Service Desk', 'IT Procurement', 'Systems Access', 'Learning Portal'
  ];
}
