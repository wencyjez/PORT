import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { TechCategory } from '../../models/portfolio.model';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent {
  private portfolioService = inject(PortfolioService);
  categories = signal<TechCategory[]>(this.portfolioService.getTechCategories());
}
