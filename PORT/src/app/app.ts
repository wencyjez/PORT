import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoadingComponent, CommonModule],
  template: `
    <app-loading *ngIf="isLoading"></app-loading>
    <div class="app-container" [class.hidden]="isLoading">
      <app-main-header></app-main-header>
      <main class="main-content">
        <div class="main-scroll">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .hidden {
      opacity: 0;
      pointer-events: none;
    }
    .app-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 100vw;
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .main-scroll {
      flex: 1;
      overflow-y: auto;
      scrollbar-width: thin;
      scrollbar-color: var(--border-color) transparent;
    }
  `]
})
export class AppComponent {
  isLoading = true;

  constructor() {
    // Simulate initial load for demo/premium feel
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
