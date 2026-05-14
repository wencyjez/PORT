import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  projects: any[];
  certificates: any[];
  scrollY = 0;

  constructor(private sanitizer: DomSanitizer) {
    this.projects = [
      {
        name: 'PLPMS',
        fullName: 'Port Landing Price Monitoring System',
        tech: ['Angular', 'Java', 'Spring Boot'],
        status: 'Production',
        progress: 100,
        description: 'Real-time price monitoring dashboard for port landing commodities with automated report generation. Built with a robust Spring Boot backend and an interactive Angular frontend.',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`),
        color: '#5b5ef4',
        glow: 'rgba(91, 94, 244, 0.4)'
      },
      {
        name: 'VeriTap',
        fullName: 'RFID-based Attendance & Verification System',
        tech: ['PHP', 'MySQL', 'Arduino C++'],
        status: 'Thesis',
        progress: 100,
        description: 'Thesis project integrating Arduino hardware with a full-stack web backend for contactless RFID verification. Features real-time logging and a custom-built PHP dashboard.',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`),
        color: '#7c3aed',
        glow: 'rgba(124, 58, 237, 0.4)'
      }
    ];

    this.certificates = [
      {
        name: 'Alibaba Cloud Certified',
        issuer: 'Alibaba Cloud',
        date: '2025',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`),
        color: '#ff6a00'
      },
      {
        name: 'Oracle Certified Associate',
        issuer: 'Oracle',
        date: '2024',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`),
        color: '#f80000'
      }
    ];
  }

  @HostListener('window:scroll')
  onWindowScroll() {
  }
}
