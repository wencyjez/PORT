import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface TechCategory {
  label: string;
  icon: SafeHtml;
  color: string;
  techs: { name: string; level: number; icon: SafeHtml }[];
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stack-wrapper fade-in">
      <div class="page-header">
        <h2 class="page-heading accent-text">Technology Stack</h2>
        <p class="page-sub">Tools, frameworks & technologies I work with</p>
      </div>

      <div class="stack-grid">
        <div *ngFor="let cat of categories; let i = index"
             class="glass-card cat-card"
             [style.animation-delay]="(i * 0.08) + 's'">
          <div class="cat-header">
            <span class="cat-icon" [style.background]="cat.color + '18'" [innerHTML]="cat.icon"></span>
            <span class="cat-label">{{cat.label}}</span>
          </div>
          <div class="tech-list">
            <div *ngFor="let tech of cat.techs" class="tech-row">
              <div class="tech-meta">
                <span class="tech-emoji" [innerHTML]="tech.icon"></span>
                <span class="tech-name">{{tech.name}}</span>
                <span class="tech-pct">{{tech.level}}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" [style.width.%]="tech.level" [style.background]="cat.color"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stack-wrapper { animation: fadeSlideUp 0.7s cubic-bezier(0.4,0,0.2,1) both; }

    .page-header { margin-bottom: 2rem; }
    .page-heading {
      font-family: 'Outfit', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 0.3rem;
    }
    .page-sub { color: var(--text-muted); font-size: 0.9rem; }

    .stack-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.25rem;
    }

    .cat-card {
      padding: 1.75rem;
      animation: fadeSlideUp 0.5s ease both;
    }
    .cat-header {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      margin-bottom: 1.5rem;
    }
    .cat-icon {
      width: 40px; height: 40px;
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem;
    }
    .cat-label {
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      font-size: 0.95rem;
    }

    .tech-list { display: flex; flex-direction: column; gap: 1rem; }
    .tech-row { display: flex; flex-direction: column; gap: 0.35rem; }
    .tech-meta {
      display: flex; align-items: center; gap: 0.5rem;
    }
    .tech-emoji { font-size: 0.9rem; }
    .tech-name { font-size: 0.83rem; font-weight: 500; flex: 1; }
    .tech-pct { font-size: 0.72rem; color: var(--text-muted); font-weight: 600; }

    .skill-bar {
      height: 5px;
      background: var(--bg-color);
      border-radius: 3px;
      overflow: hidden;
    }
    .skill-fill {
      height: 100%;
      border-radius: 3px;
      transition: width 1s cubic-bezier(0.4,0,0.2,1);
    }
  `]
})
export class StackComponent {
  categories: TechCategory[];

  constructor(private sanitizer: DomSanitizer) {
    const s = (svg: string) => this.sanitizer.bypassSecurityTrustHtml(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svg}</svg>`);
    const sc = (svg: string) => this.sanitizer.bypassSecurityTrustHtml(`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svg}</svg>`);

    this.categories = [
      {
        label: 'Frontend',
        icon: sc('<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>'),
        color: '#5b5ef4',
        techs: [
          { name: 'Angular', level: 85, icon: s('<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>') },
          { name: 'TypeScript', level: 80, icon: s('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><polyline points="16 13 8 13"></polyline><polyline points="16 17 8 17"></polyline><polyline points="10 9 9 9 8 9"></polyline>') },
          { name: 'HTML / CSS', level: 90, icon: s('<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>') },
          { name: 'JavaScript', level: 78, icon: s('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>') },
        ]
      },
      {
        label: 'Backend',
        icon: sc('<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>'),
        color: '#7c3aed',
        techs: [
          { name: 'Java', level: 80, icon: s('<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>') },
          { name: 'Spring Boot', level: 75, icon: s('<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>') },
          { name: 'PHP', level: 82, icon: s('<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>') },
          { name: 'RESTful APIs', level: 78, icon: s('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>') },
        ]
      },
      {
        label: 'Database',
        icon: sc('<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>'),
        color: '#0ea5e9',
        techs: [
          { name: 'MySQL', level: 85, icon: s('<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>') },
          { name: 'SQL', level: 80, icon: s('<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>') },
          { name: 'SQLite', level: 70, icon: s('<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>') },
        ]
      },
      {
        label: 'Mobile & Hardware',
        icon: sc('<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>'),
        color: '#f59e0b',
        techs: [
          { name: 'Android Studio', level: 75, icon: s('<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>') },
          { name: 'Java (Android)', level: 75, icon: s('<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>') },
          { name: 'Arduino (C++)', level: 68, icon: s('<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>') },
        ]
      },
      {
        label: 'Reporting & Tools',
        icon: sc('<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>'),
        color: '#10b981',
        techs: [
          { name: 'JasperReports', level: 72, icon: s('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>') },
          { name: 'Git / GitHub', level: 80, icon: s('<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>') },
          { name: 'VS Code', level: 90, icon: s('<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>') },
        ]
      },
    ];
  }
}
