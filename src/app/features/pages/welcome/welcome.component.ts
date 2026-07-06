import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'adb-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  userName = 'Jane Doe';
  userTitle = 'Senior IT Specialist';
  userDepartment = 'Information Technology Department (ITD)';

  avatarUrl      = 'https://www.figma.com/api/mcp/asset/75576cbe-deb7-4dfa-b6e9-5be5cca27e57';
  avatarOverlayUrl = 'https://www.figma.com/api/mcp/asset/4edbd0af-7806-4f63-a984-bf0c5899d8e2';
  arrowRightUrl  = 'https://www.figma.com/api/mcp/asset/37783577-8b42-4611-a750-e12a7b865dd1';

  constructor(private router: Router) {}

  getStarted() { this.router.navigate(['/personalize']); }
  setupLater()  { this.router.navigate(['/dashboard']); }
}
