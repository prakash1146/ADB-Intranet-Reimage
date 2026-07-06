import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'adb-root',
  imports: [RouterOutlet],
  template: `<router-outlet/>`
})
export class App {
  constructor() {
    inject(AuthService).init();
  }
}
