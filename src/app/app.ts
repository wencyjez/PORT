import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LoadingComponent, FooterComponent, CommonModule],
  template: `
    <app-loading *ngIf="isLoading"></app-loading>
    <div class="app-container" [class.hidden]="isLoading">
      <!-- Global animated mesh background -->
      <div class="mesh-container">
        <div class="mesh-blob orange-blob"></div>
        <div class="mesh-blob purple-blob"></div>
        <div class="mesh-blob blue-blob"></div>
      </div>

      <app-main-header></app-main-header>
      <main class="main-content">
        <div class="main-scroll">
          <router-outlet></router-outlet>
        </div>
      </main>
      <app-main-footer></app-main-footer>
    </div>
  `,
  styles: [`
    .hidden {
      opacity: 0;
      pointer-events: none;
    }
    .app-container {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 100%;
      color: var(--text-color);
      transition: color 0.3s ease;
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
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: var(--border-color) transparent;
      padding: 0 clamp(1rem, 4vw, 3rem) 2rem;
    }

    /* Global content width constraint — all pages inherit this */
    .main-scroll > * {
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
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
