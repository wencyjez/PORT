import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  template: `
    <header class="header-container">
      <div class="header-pill glass-card">
        <!-- Logo -->
        <div class="header-left">
          <div class="logo">
            <span class="logo-text">wency</span>
          </div>
        </div>

        <!-- Center Navigation -->
        <nav class="nav-links" [class.mobile-open]="isMobileMenuOpen">
          <a class="nav-item" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMobileMenu()">
            About
          </a>
          <a class="nav-item" routerLink="/stack" routerLinkActive="active" (click)="closeMobileMenu()">
            Skills
          </a>
          <a class="nav-item" routerLink="/experience" routerLinkActive="active" (click)="closeMobileMenu()">
            Experience
          </a>
          <a class="nav-item" routerLink="/portfolio" routerLinkActive="active" (click)="closeMobileMenu()">
            Projects
          </a>
          <a class="nav-item" routerLink="/education" routerLinkActive="active" (click)="closeMobileMenu()">
            Education
          </a>
          <a class="nav-item" routerLink="/certificates" routerLinkActive="active" (click)="closeMobileMenu()">
            Certificates
          </a>
        </nav>

        <!-- Right Section: Socials & Toggle -->
        <div class="header-right">
          <div class="social-links desktop-only">
            <a href="#" class="social-icon" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" class="social-icon" title="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
          
          <div class="divider desktop-only"></div>

          <button class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'">
            <div class="toggle-track" [class.dark]="isDarkTheme">
              <div class="toggle-thumb">
                <svg *ngIf="!isDarkTheme" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                <svg *ngIf="isDarkTheme" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </div>
            </div>
          </button>

          <!-- Mobile Menu Toggle -->
          <button class="mobile-toggle" (click)="toggleMobileMenu()" [attr.aria-label]="'Toggle Menu'">
            <svg *ngIf="!isMobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <svg *ngIf="isMobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Overlay for mobile menu -->
    <div class="mobile-overlay" *ngIf="isMobileMenuOpen" (click)="closeMobileMenu()"></div>
  `,
  styles: [`
    .header-container {
      position: fixed;
      top: 1.5rem;
      left: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      justify-content: center;
      padding: 0 1.5rem;
      pointer-events: none;
    }

    .header-pill {
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      padding: 0.5rem 0.6rem 0.5rem 1.5rem;
      background: rgba(var(--bg-color-rgb), 0.65);
      backdrop-filter: blur(24px) saturate(1.6);
      -webkit-backdrop-filter: blur(24px) saturate(1.6);
      border-radius: 100px;
      max-width: 1000px;
      width: 100%;
      border: 1px solid rgba(var(--accent-color-rgb), 0.12);
      box-shadow:
        0 4px 24px -2px rgba(0, 0, 0, 0.08),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset,
        0 1px 0 rgba(255, 255, 255, 0.1) inset;
      transition: box-shadow 0.4s ease, border-color 0.4s ease;
      transform: none !important;
    }

    .header-pill:hover,
    .header-pill:focus-within {
      transform: none !important;
      border-color: rgba(var(--accent-color-rgb), 0.22);
      box-shadow:
        0 8px 32px -4px rgba(0, 0, 0, 0.12),
        0 0 0 1px rgba(255, 255, 255, 0.06) inset,
        0 1px 0 rgba(255, 255, 255, 0.12) inset;
    }

    /* ── Logo ── */
    .logo {
      display: flex;
      align-items: center;
      font-family: 'Outfit', sans-serif;
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--text-color);
      letter-spacing: -0.5px;
      flex-shrink: 0;
    }

    /* ── Nav ── */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background: rgba(var(--text-color), 0.03);
      border-radius: 100px;
      padding: 0.2rem;
    }
    
    .nav-item {
      position: relative;
      padding: 0.5rem 1.1rem;
      border-radius: 100px;
      color: var(--text-color);
      text-decoration: none;
      font-size: 0.82rem;
      font-weight: 500;
      letter-spacing: 0.01em;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0.55;
      white-space: nowrap;
    }

    .nav-item:hover {
      opacity: 0.9;
      background: rgba(var(--accent-color-rgb), 0.06);
    }

    .nav-item.active {
      opacity: 1;
      color: white;
      font-weight: 600;
      background: var(--accent-color);
      box-shadow:
        0 2px 12px -2px rgba(var(--accent-color-rgb), 0.4),
        0 0 0 1px rgba(var(--accent-color-rgb), 0.1) inset;
    }

    /* ── Right Section ── */
    .header-right {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-shrink: 0;
    }

    .social-links {
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }

    .social-icon {
      color: var(--text-color);
      opacity: 0.5;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: transparent;
    }
    .social-icon:hover {
      opacity: 1;
      background: rgba(var(--accent-color-rgb), 0.08);
      color: var(--accent-color);
    }

    .divider {
      width: 1px;
      height: 20px;
      background: var(--border-color);
      opacity: 0.6;
    }

    /* ── Custom Theme Toggle ── */
    .theme-toggle {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }

    .toggle-track {
      width: 44px;
      height: 24px;
      background: rgba(var(--text-color), 0.08);
      border-radius: 20px;
      position: relative;
      transition: all 0.3s ease;
      border: 1px solid rgba(var(--text-color), 0.08);
    }

    .toggle-track:hover {
      border-color: rgba(var(--accent-color-rgb), 0.3);
    }

    .toggle-thumb {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 18px;
      height: 18px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 2px 6px rgba(0,0,0,0.12);
      color: #333;
    }

    .toggle-track.dark {
      background: var(--accent-color);
      border-color: var(--accent-color);
    }

    .toggle-track.dark .toggle-thumb {
      left: calc(100% - 20px);
    }

    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      color: var(--text-color);
      cursor: pointer;
      padding: 0.25rem;
      z-index: 1002;
    }

    .mobile-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(var(--bg-color-rgb), 0.5);
      backdrop-filter: blur(8px);
      z-index: 999;
      pointer-events: auto;
    }

    /* Responsive */
    @media (max-width: 850px) {
      .header-container {
        top: 0.75rem;
        padding: 0 0.75rem;
      }
      .header-pill {
        gap: 0.75rem;
        padding: 0.5rem 0.75rem 0.5rem 1.25rem;
        border-radius: 20px;
      }
      .desktop-only {
        display: none;
      }
      .mobile-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .nav-links {
        position: fixed;
        top: 5rem;
        left: 0.75rem;
        right: 0.75rem;
        background: rgba(var(--bg-color-rgb), 0.92);
        backdrop-filter: blur(24px) saturate(1.6);
        -webkit-backdrop-filter: blur(24px) saturate(1.6);
        flex-direction: column;
        padding: 1rem;
        border-radius: 20px;
        border: 1px solid rgba(var(--accent-color-rgb), 0.12);
        box-shadow:
          0 16px 48px -8px rgba(0, 0, 0, 0.15),
          0 0 0 1px rgba(255, 255, 255, 0.05) inset;
        gap: 0.35rem;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px) scale(0.98);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1001;
      }

      .nav-links.mobile-open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }

      .nav-item {
        width: 100%;
        text-align: center;
        padding: 0.85rem 1rem;
        font-size: 0.95rem;
        border-radius: 14px;
      }

      .nav-item.active {
        background: var(--accent-color);
        color: white;
      }
    }
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  constructor(private themeService: ThemeService) { }

  get isDarkTheme(): boolean {
    return this.themeService.isDarkTheme;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
