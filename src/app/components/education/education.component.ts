import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { EducationItem, CertificationItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  private portfolioService = inject(PortfolioService);
  
  education = signal<EducationItem[]>(this.portfolioService.getEducation());
  certifications = signal<CertificationItem[]>(this.portfolioService.getCertifications());
}
