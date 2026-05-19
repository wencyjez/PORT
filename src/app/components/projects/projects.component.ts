import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: any[];

  isVeritapModalOpen = false;
  veritapImages: string[] = [
    'attendance.png',
    'dashboard.png',
    'display.png',
    'hardware.png',
    'login-teachers.png',
    'login.png',
    'mainpage.png',
    'masterlist.png',
    'section.png',
    'subjects.png',
    'teachers.png',
    'view attendance.png'
  ];
  currentImageIndex = 0;

  constructor(private sanitizer: DomSanitizer) {
    this.projects = [
      {
        name: 'PLPMS',
        fullName: 'Port Landing Price Monitoring System',
        tech: ['Angular', 'Java', 'Spring Boot', 'JasperReports'],
        status: 'Internship',
        progress: 100,
        description: 'Developer for an enterprise-level real-time price monitoring dashboard for port landing commodities. Implemented automated report generation using JasperReports and applied AI tools for debugging and efficiency.',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`),
        color: '#5b5ef4',
        glow: 'rgba(91, 94, 244, 0.4)'
      },
      {
        name: 'DSMS',
        fullName: 'Digital Signature Management System',
        tech: ['Angular', 'TypeScript', 'HTML', 'CSS'],
        status: 'Internship',
        progress: 100,
        description: 'Front-End Developer for a system managing digital signatures. Collaborated in a team to significantly improve UI/UX and utilized AI-assisted tools for coding and UI enhancements.',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`),
        color: '#3b82f6',
        glow: 'rgba(59, 130, 246, 0.4)'
      },
      {
        name: 'VeriTap',
        fullName: 'RFID Attendance System',
        tech: ['PHP', 'MySQL', 'Arduino C++'],
        status: 'Thesis',
        progress: 100,
        description: 'Lead Developer for a thesis project integrating Arduino hardware with a web-based PHP/MySQL stack for real-time tracking and concurrent attendance logging.',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`),
        color: '#7c3aed',
        glow: 'rgba(124, 58, 237, 0.4)'
      },
      {
        name: 'Budgetify',
        fullName: 'Mobile App',
        tech: ['Java', 'Android Studio'],
        status: 'Freelance',
        progress: 100,
        description: 'Android Developer for a dedicated expense-tracking mobile application featuring custom UI for data visualization of spending habits.',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`),
        color: '#f59e0b',
        glow: 'rgba(245, 158, 11, 0.4)'
      },
      {
        name: 'Dental Clinic',
        fullName: 'Management System',
        tech: ['PHP', 'MySQL'],
        status: 'Thesis',
        progress: 100,
        description: 'Web Developer for a full-stack system managing patient appointments and digital records.',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>`),
        color: '#10b981',
        glow: 'rgba(16, 185, 129, 0.4)'
      }
    ];
  }

  openVeritapModal() {
    this.isVeritapModalOpen = true;
    this.currentImageIndex = 0;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isVeritapModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  nextImage(event: Event) {
    event.stopPropagation();
    if (this.currentImageIndex < this.veritapImages.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  prevImage(event: Event) {
    event.stopPropagation();
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.veritapImages.length - 1;
    }
  }
}
