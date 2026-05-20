import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  scrollY = 0;
  
  gmailComposeUrl = '';
  outlookComposeUrl = '';

  constructor(public themeService: ThemeService) {
    const recipient = 'wency.jez@gmail.com';
    const subject = 'Inquiry from Portfolio';
    const body = 'Hi Wency,\n\nI was browsing your portfolio and wanted to connect!';
    
    this.gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    this.outlookComposeUrl = `https://outlook.live.com/default.aspx?rru=compose&to=${encodeURIComponent(recipient)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
  }
}
