import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="edu-wrapper fade-in">
      <div class="page-header">
        <h2 class="page-heading accent-text">Education</h2>
        <p class="page-sub">Academic background and achievements</p>
      </div>

      <!-- Main education card -->
      <div class="edu-grid">
        <div *ngFor="let edu of education; let i = index"
             class="glass-card edu-card"
             [class.featured]="edu.featured"
             [style.animation-delay]="(i * 0.1) + 's'">
          <div class="edu-top">
            <div class="school-logo" [style.background]="edu.color + '15'" [innerHTML]="edu.icon"></div>
            <div class="edu-badge-wrap">
              <span class="edu-badge" [style.background]="edu.color + '18'" [style.color]="edu.color">
                {{edu.level}}
              </span>
            </div>
          </div>
          <div class="edu-body">
            <h3 class="edu-degree">{{edu.degree}}</h3>
            <p class="edu-school">{{edu.school}}</p>
            <p class="edu-period">{{edu.period}}</p>
            <p class="edu-desc">{{edu.description}}</p>
          </div>
          <div *ngIf="edu.achievements.length" class="edu-achievements">
            <span class="ach-label">Highlights</span>
            <ul class="ach-list">
              <li *ngFor="let a of edu.achievements">{{a}}</li>
            </ul>
          </div>
          <div *ngIf="edu.gwa" class="edu-gpa">
            <span class="gpa-val" [style.color]="edu.color">{{edu.gwa}}</span>
            <span class="gpa-label">GWA / Grade</span>
          </div>
        </div>
      </div>

      <!-- Certifications / Awards section -->
      <div class="certs-section">
        <h3 class="section-title">Certifications & Awards</h3>
        <div class="certs-grid">
          <div *ngFor="let cert of certifications" class="glass-card cert-card">
            <span class="cert-icon" [innerHTML]="cert.icon"></span>
            <div class="cert-info">
              <span class="cert-name">{{cert.name}}</span>
              <span class="cert-issuer">{{cert.issuer}}</span>
            </div>
            <span class="cert-year">{{cert.year}}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .edu-wrapper { animation: fadeSlideUp 0.7s cubic-bezier(0.4,0,0.2,1) both; }
    .page-header { margin-bottom: 2rem; }
    .page-heading {
      font-family: 'Outfit', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 0.3rem;
    }
    .page-sub { color: var(--text-muted); font-size: 0.9rem; }

    /* Education grid */
    .edu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.25rem;
      margin-bottom: 2rem;
    }

    .edu-card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      animation: fadeSlideUp 0.5s ease both;
    }
    .edu-card.featured {
      border-top: 2px solid var(--accent-color);
    }

    .edu-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .school-logo {
      width: 52px;
      height: 52px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }
    .edu-badge {
      font-size: 0.68rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .edu-degree {
      font-family: 'Outfit', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: -0.3px;
      line-height: 1.3;
    }
    .edu-school {
      font-size: 0.82rem;
      color: var(--accent-color);
      font-weight: 500;
      margin-top: 3px;
    }
    .edu-period {
      font-size: 0.75rem;
      color: var(--text-muted);
      margin-top: 2px;
    }
    .edu-desc {
      font-size: 0.82rem;
      color: var(--text-muted);
      line-height: 1.5;
      margin-top: 0.5rem;
    }

    .edu-achievements {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .ach-label {
      font-size: 0.68rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: var(--text-muted);
    }
    .ach-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }
    .ach-list li {
      font-size: 0.8rem;
      color: var(--text-muted);
      padding-left: 1rem;
      position: relative;
    }
    .ach-list li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--accent-color);
      font-size: 0.75rem;
    }

    .edu-gpa {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      margin-top: auto;
    }
    .gpa-val {
      font-family: 'Outfit', sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .gpa-label {
      font-size: 0.72rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    /* Certifications */
    .certs-section { margin-top: 1rem; }
    .section-title {
      font-family: 'Outfit', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 1rem;
      letter-spacing: -0.3px;
    }
    .certs-grid {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .cert-card {
      padding: 1rem 1.25rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      border-radius: 16px;
    }
    .cert-icon { font-size: 1.4rem; flex-shrink: 0; }
    .cert-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .cert-name { font-size: 0.875rem; font-weight: 600; }
    .cert-issuer { font-size: 0.75rem; color: var(--text-muted); }
    .cert-year { font-size: 0.75rem; color: var(--text-muted); font-weight: 500; }
  `]
})
export class EducationComponent {
  education: any[];
  certifications: any[];

  constructor(private sanitizer: DomSanitizer) {
    const s = (svg: string) => this.sanitizer.bypassSecurityTrustHtml(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svg}</svg>`);

    this.education = [
      {
        degree: 'Bachelor of Science in Information Technology',
        school: 'Camarines Norte State College',
        period: '2021 – 2025',
        level: 'BS Degree',
        icon: s('<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>'),
        color: '#5b5ef4',
        featured: true,
        description: 'Major in Information Technology with a focus on full-stack web development, mobile computing, and systems design. Graduated with academic distinction.',
        achievements: [
          'Lead Developer — VeriTap RFID Thesis System',
          'OJT Excellence — 800+ hours rendered',
          'PLPMS project contributor (Angular + Spring Boot)',
          'Mobile Development — Budgetify Android App',
        ],
        gwa: '1.75'
      },
      {
        degree: 'Science, Technology, Engineering & Mathematics (STEM)',
        school: 'Secondary Education — Senior High',
        period: '2019 – 2021',
        level: 'SHS',
        icon: s('<path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path><path d="M12 22v-6.5"></path><path d="M22 8.5l-10 6.5-10-6.5"></path><path d="M12 2l0 6.5"></path>'),
        color: '#0ea5e9',
        featured: false,
        description: 'Completed the STEM strand with a strong foundation in mathematics, computer science fundamentals, and scientific reasoning.',
        achievements: [
          'STEM honor student',
          'Intro to Programming coursework',
        ],
        gwa: null
      }
    ];

    this.certifications = [
      { name: 'PLPMS OJT Certificate of Completion', issuer: 'Internship Program', year: '2025', icon: s('<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>') },
      { name: 'VeriTap Thesis Defense — Passed', issuer: 'CNSC IT Department', year: '2025', icon: s('<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>') },
      { name: 'Android Development Fundamentals', issuer: 'Academic Coursework', year: '2023', icon: s('<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>') },
      { name: 'Web Development with PHP & MySQL', issuer: 'Academic Coursework', year: '2023', icon: s('<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>') },
    ];
  }
}
