import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="exp-wrapper fade-in">
      <div class="page-header">
        <h2 class="page-heading accent-text">Experience</h2>
        <p class="page-sub">My professional journey and roles</p>
      </div>

      <div class="timeline">
        <div *ngFor="let exp of experiences; let i = index" class="timeline-item">
          <div class="timeline-line">
            <div class="timeline-dot" [style.background]="exp.color"></div>
            <div class="timeline-connector" *ngIf="i < experiences.length - 1"></div>
          </div>
          <div class="glass-card timeline-card">
            <div class="exp-header">
              <div class="exp-meta">
                <h3 class="exp-role">{{exp.role}}</h3>
                <span class="exp-company">{{exp.company}}</span>
              </div>
              <div class="exp-right">
                <span class="exp-type badge" [style.background]="exp.color + '18'" [style.color]="exp.color">
                  {{exp.type}}
                </span>
                <span class="exp-period">{{exp.period}}</span>
              </div>
            </div>
            <p class="exp-description">{{exp.description}}</p>
            <div class="exp-highlights">
              <span *ngFor="let h of exp.highlights" class="highlight-chip">{{h}}</span>
            </div>
            <div class="exp-footer">
              <div class="exp-stats">
                <div *ngFor="let stat of exp.stats" class="mini-stat">
                  <span class="mini-stat-val" [style.color]="exp.color">{{stat.value}}</span>
                  <span class="mini-stat-label">{{stat.label}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .exp-wrapper { animation: fadeSlideUp 0.7s cubic-bezier(0.4,0,0.2,1) both; }
    .page-header { margin-bottom: 2rem; }
    .page-heading {
      font-family: 'Outfit', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 0.3rem;
    }
    .page-sub { color: var(--text-muted); font-size: 0.9rem; }

    .timeline {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .timeline-item {
      display: flex;
      gap: 1.5rem;
      animation: fadeSlideUp 0.5s ease both;
    }

    .timeline-line {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 1.5rem;
      flex-shrink: 0;
    }
    .timeline-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 3px solid var(--bg-color);
      box-shadow: 0 0 0 2px currentColor;
      flex-shrink: 0;
    }
    .timeline-connector {
      width: 2px;
      flex: 1;
      background: var(--border-color);
      margin: 6px 0;
      min-height: 2rem;
    }

    .timeline-card {
      flex: 1;
      padding: 1.75rem;
      margin-bottom: 1.25rem;
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .exp-role {
      font-family: 'Outfit', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: -0.3px;
    }
    .exp-company {
      font-size: 0.82rem;
      color: var(--text-muted);
      font-weight: 500;
    }
    .exp-meta { display: flex; flex-direction: column; gap: 3px; }

    .exp-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
    }
    .exp-type {
      font-size: 0.7rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: 6px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    .exp-period {
      font-size: 0.75rem;
      color: var(--text-muted);
    }

    .exp-description {
      font-size: 0.875rem;
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 1.25rem;
    }

    .exp-highlights {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.25rem;
    }
    .highlight-chip {
      font-size: 0.72rem;
      font-weight: 500;
      padding: 0.25rem 0.7rem;
      background: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 50px;
      color: var(--text-muted);
    }

    .exp-footer {}
    .exp-stats {
      display: flex;
      gap: 2rem;
    }
    .mini-stat { display: flex; flex-direction: column; gap: 1px; }
    .mini-stat-val {
      font-family: 'Outfit', sans-serif;
      font-size: 1.3rem;
      font-weight: 800;
      letter-spacing: -0.5px;
    }
    .mini-stat-label {
      font-size: 0.7rem;
      color: var(--text-muted);
      font-weight: 500;
    }
  `]
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Full-Stack Developer Intern',
      company: 'On-the-Job Training — PLPMS Project',
      type: 'Internship',
      period: '2024 – 2025',
      color: '#5b5ef4',
      description: 'Developed and maintained the Port Landing Price Monitoring System (PLPMS), an enterprise-level Angular + Spring Boot application for real-time commodity price surveillance at port landings. Generated structured JasperReports PDF exports for stakeholder reporting.',
      highlights: ['Angular 17', 'Spring Boot', 'JasperReports', 'MySQL', 'REST APIs', 'Agile'],
      stats: [
        { value: '800+', label: 'Hours Rendered' },
        { value: '3', label: 'Modules Built' },
      ]
    },
    {
      role: 'Lead Developer',
      company: 'VeriTap — Thesis Project',
      type: 'Lead Role',
      period: '2024',
      color: '#7c3aed',
      description: 'Led the full development of VeriTap, an RFID-based attendance and identity verification system. Integrated Arduino hardware with a PHP/MySQL backend, enabling contactless real-time attendance logging and identity validation for institutional use.',
      highlights: ['Arduino (C++)', 'PHP', 'MySQL', 'RFID', 'Hardware Integration', 'Project Lead'],
      stats: [
        { value: '1st', label: 'Lead Developer' },
        { value: '100%', label: 'System Uptime' },
      ]
    },
    {
      role: 'Android Developer',
      company: 'Budgetify — Academic Project',
      type: 'Developer',
      period: '2023',
      color: '#f59e0b',
      description: 'Designed and implemented Budgetify, a personal expense-tracking Android application. Built category-based expense logging, budget limit alerts, and visual spending analytics using Android Studio and SQLite.',
      highlights: ['Android Studio', 'Java', 'SQLite', 'Material Design', 'UI/UX'],
      stats: [
        { value: '90%', label: 'App Complete' },
        { value: '5+', label: 'Core Features' },
      ]
    }
  ];
}
