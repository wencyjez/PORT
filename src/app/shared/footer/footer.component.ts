import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer-container glass-card">
      <div class="footer-grid">
        <!-- Branding and Mission -->
        <div class="footer-brand">
          <div class="logo">
            <span class="logo-text">wency<span class="accent-dot">.</span></span>
          </div>
          <p class="brand-tagline">
            Aspiring Software Developer dedicated to crafting high-fidelity, interactive web & mobile solutions.
          </p>
        </div>

        <!-- Quick Navigation Links -->
        <div class="footer-nav">
          <h4 class="nav-title">Navigation</h4>
          <ul class="nav-list">
            <li><a routerLink="/" class="footer-link">About</a></li>
            <li><a routerLink="/stack" class="footer-link">Skills</a></li>
            <li><a routerLink="/experience" class="footer-link">Experience</a></li>
            <li><a routerLink="/portfolio" class="footer-link">Projects</a></li>
            <li><a routerLink="/education" class="footer-link">Education</a></li>
            <li><a routerLink="/certificates" class="footer-link">Certificates</a></li>
          </ul>
        </div>

        <!-- Professional Networks -->
        <div class="footer-socials">
          <h4 class="nav-title">Connect</h4>
          <p class="socials-desc">Feel free to reach out for internship, freelance, or full-time opportunities.</p>
          <div class="social-icons">
            <a href="https://github.com/wencyjez" target="_blank" rel="noopener noreferrer" class="social-btn github-btn" title="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/wency-jezrel-opiso" target="_blank" rel="noopener noreferrer" class="social-btn linkedin-btn" title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:wency.jez@gmail.com" class="social-btn mail-btn" title="Email Address">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright Area -->
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="bottom-wrap">
          <p class="copyright-text">&copy; 2026 Wency Jezrel Opiso. All rights reserved.</p>
          <p class="tech-text">Crafted with Angular &amp; Premium Glassmorphism</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-container {
      margin: 4rem auto 2.5rem;
      max-width: 1100px;
      width: calc(100% - 2 * clamp(1rem, 4vw, 3rem));
      padding: 3.5rem 3rem 2rem;
      background: rgba(var(--bg-color-rgb), 0.5);
      backdrop-filter: blur(24px) saturate(1.6);
      -webkit-backdrop-filter: blur(24px) saturate(1.6);
      border: 1px solid rgba(var(--accent-color-rgb), 0.1);
      box-shadow: var(--shadow);
      z-index: 5;
      position: relative;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1.5fr;
      gap: 3.5rem;
      align-items: start;
    }

    /* ── Brand column ── */
    .logo {
      display: flex;
      align-items: center;
      font-family: 'Outfit', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--text-color);
      letter-spacing: -0.5px;
      margin-bottom: 1rem;
    }

    .accent-dot {
      color: var(--accent-color);
    }

    .brand-tagline {
      font-size: 0.92rem;
      line-height: 1.6;
      color: var(--text-muted);
      max-width: 320px;
    }

    /* ── Nav Column ── */
    .nav-title {
      font-family: 'Outfit', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--text-color);
      margin-bottom: 1.25rem;
    }

    .nav-list {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem 1rem;
      padding: 0;
    }

    .footer-link {
      font-size: 0.88rem;
      color: var(--text-muted);
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .footer-link:hover {
      color: var(--accent-color);
      transform: translateX(3px);
    }

    /* ── Social Column ── */
    .socials-desc {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
    }

    .social-icons {
      display: flex;
      gap: 0.8rem;
    }

    .social-btn {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-color);
      background: rgba(var(--text-color), 0.03);
      border: 1px solid var(--border-color);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;
      position: relative;
    }

    .social-btn:hover {
      transform: translateY(-4px);
      color: white;
    }

    /* Interactive branded glows */
    .github-btn:hover {
      background: #24292e;
      border-color: #24292e;
      box-shadow: 0 8px 24px rgba(36, 41, 46, 0.35);
    }

    .linkedin-btn:hover {
      background: #0077b5;
      border-color: #0077b5;
      box-shadow: 0 8px 24px rgba(0, 119, 181, 0.35);
    }

    .mail-btn:hover {
      background: var(--accent-color);
      border-color: var(--accent-color);
      box-shadow: 0 8px 24px rgba(123, 126, 248, 0.35);
    }

    /* ── Bottom Section ── */
    .footer-divider {
      height: 1px;
      background: var(--border-color);
      margin: 2.5rem 0 1.5rem;
    }

    .bottom-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
    }

    .copyright-text, .tech-text {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .tech-text {
      font-weight: 500;
    }

    /* ── Responsive adjustments ── */
    @media (max-width: 900px) {
      .footer-container {
        padding: 3rem 2rem 1.5rem;
        margin-top: 3rem;
      }
      .footer-grid {
        grid-template-columns: 1.2fr 1fr;
        gap: 2.5rem 3.5rem;
      }
      .footer-socials {
        grid-column: span 2;
        max-width: 480px;
      }
    }

    @media (max-width: 600px) {
      .footer-container {
        padding: 2.5rem 1.5rem 1.5rem;
        border-radius: 20px;
      }
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .footer-socials {
        grid-column: span 1;
      }
      .nav-list {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
      .bottom-wrap {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
      }
    }
  `]
})
export class FooterComponent {
  constructor(public themeService: ThemeService) {}
}
