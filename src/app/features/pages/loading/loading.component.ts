import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'adb-loading',
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  /* ADBuddy avatar composite pieces */
  buddyBaseUrl    = 'https://www.figma.com/api/mcp/asset/1befaadd-9096-48e2-9a20-cc66b9e90e95';
  buddyOverlay1   = 'https://www.figma.com/api/mcp/asset/9c50857c-1241-40ed-bceb-60f8fc24982b';
  buddyOverlay2   = 'https://www.figma.com/api/mcp/asset/e8fb742e-7d40-47a2-9ed3-56479f5d1d23';

  constructor(private router: Router) {}

  ngOnInit() {
    /* Auto-advance to homepage-ready after 3 seconds */
    setTimeout(() => this.router.navigate(['/homepage-ready']), 3000);
  }
}
