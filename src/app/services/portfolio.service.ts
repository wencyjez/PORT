import { Injectable, signal } from '@angular/core';
import { TechCategory, WorkExperience, EducationItem, CertificationItem } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getTechCategories(): TechCategory[] {
    return [
      {
        label: 'Frontend',
        icon: 'frontend-icon',
        color: '#5b5ef4',
        techs: [
          { name: 'Angular', icon: 'angular-icon' },
          { name: 'TypeScript', icon: 'ts-icon' },
          { name: 'HTML / CSS', icon: 'html-icon' },
          { name: 'JavaScript', icon: 'js-icon' },
        ]
      },
      {
        label: 'Backend',
        icon: 'backend-icon',
        color: '#7c3aed',
        techs: [
          { name: 'Java', icon: 'java-icon' },
          { name: 'Spring Boot', icon: 'spring-icon' },
          { name: 'PHP', icon: 'php-icon' },
          { name: 'RESTful APIs', icon: 'api-icon' },
        ]
      },
      {
        label: 'Database',
        icon: 'database-icon',
        color: '#0ea5e9',
        techs: [
          { name: 'MySQL', icon: 'mysql-icon' },
          { name: 'SQL', icon: 'sql-icon' },
          { name: 'SQLite', icon: 'sqlite-icon' },
        ]
      },
      {
        label: 'Mobile & Hardware',
        icon: 'mobile-icon',
        color: '#f59e0b',
        techs: [
          { name: 'Android Studio', icon: 'android-icon' },
          { name: 'Java (Android)', icon: 'java-icon' },
          { name: 'Arduino (C++)', icon: 'arduino-icon' },
        ]
      },
      {
        label: 'Reporting & Tools',
        icon: 'tools-icon',
        color: '#10b981',
        techs: [
          { name: 'JasperReports', icon: 'jasper-icon' },
          { name: 'Git / GitHub', icon: 'git-icon' },
          { name: 'VS Code', icon: 'vscode-icon' },
        ]
      },
    ];
  }

  getExperiences(): WorkExperience[] {
    return [
      {
        role: 'Programming Intern',
        company: 'Bureau of Fisheries and Aquatic Resources',
        type: 'Internship',
        period: '12/2025 – 05/2026',
        color: '#5b5ef4',
        description: 'Served as Front-End Developer for DSMS (Digital Signature Management System) and Developer for PLPMS (Port Landing Price Monitoring System). Collaborated in team environments to improve UI/UX, generate JasperReports, and leverage AI-assisted tools for debugging and efficiency.',
        highlights: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'JasperReports', 'AI Tools'],
        stats: [
          { value: '800', label: 'Hours Rendered' },
          { value: '2', label: 'Enterprise Systems' },
        ]
      }
    ];
  }

  getEducation(): EducationItem[] {
    return [
      {
        degree: 'BS in Information Technology (Mobile & Internet Technology)',
        school: 'National University - Fairview',
        period: '2022 – Aug 2026',
        level: 'BS Degree',
        icon: 'degree-icon',
        color: '#5b5ef4',
        featured: false,
        description: 'Major in Information Technology with a specialization in Mobile and Internet Technology.',
        achievements: [
          'Lead Developer — VeriTap RFID Thesis System',
          'Web Developer — Dental Clinic Management System',
        ],
        gwa: null
      },
      {
        degree: 'Humanities and Social Sciences Strand',
        school: 'Christian Ecclesiastical School',
        period: '2020 – 2022',
        level: 'SHS',
        icon: 'shs-icon',
        color: '#0ea5e9',
        featured: false,
        description: 'Completed the Humanities and Social Sciences (HUMSS) strand.',
        achievements: [],
        gwa: null
      }
    ];
  }

  getCertifications(): CertificationItem[] {
    return [
      { name: 'ApsaraDB RDS Fundamentals', issuer: 'Alibaba Cloud', year: '', icon: 'cert-icon' },
      { name: 'SLB Fundamentals', issuer: 'Alibaba Cloud', year: '', icon: 'cert-icon' },
      { name: 'ECS Fundamentals', issuer: 'Alibaba Cloud', year: '', icon: 'cert-icon' },
      { name: 'OSS Fundamentals Essential Training', issuer: 'Alibaba Cloud', year: '', icon: 'cert-icon' },
      { name: 'Oracle Certified Office Foundations Associate', issuer: 'Oracle', year: '', icon: 'cert-icon' },
    ];
  }
}
