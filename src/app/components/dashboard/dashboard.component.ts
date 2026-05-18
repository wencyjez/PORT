import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  certificates: any[];
  scrollY = 0;

  constructor(private sanitizer: DomSanitizer, public themeService: ThemeService) {
    this.certificates = [
      {
        name: 'ApsaraDB RDS Fundamentals',
        issuer: 'Alibaba Cloud',
        date: '',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`),
        color: '#ff6a00'
      },
      {
        name: 'SLB Fundamentals',
        issuer: 'Alibaba Cloud',
        date: '',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`),
        color: '#ff6a00'
      },
      {
        name: 'ECS Fundamentals',
        issuer: 'Alibaba Cloud',
        date: '',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`),
        color: '#ff6a00'
      },
      {
        name: 'Oracle Certified Office Foundations Associate',
        issuer: 'Oracle',
        date: '',
        icon: this.sanitizer.bypassSecurityTrustHtml(`<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`),
        color: '#f80000'
      }
    ];
  }

  @HostListener('window:scroll')
  onWindowScroll() {
  }
}
