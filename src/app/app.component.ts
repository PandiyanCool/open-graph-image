import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OpenGraphService } from './open-graph.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [OpenGraphService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ogImage: string | undefined;
  targetURL = 'https://efficientuser.com/2024/07/25/understanding-c-anti-patterns-examples-and-solutions-for-better-code/';
  loading = false;

  constructor(private openGraphService: OpenGraphService) { }

  fetchOGImage() {
    this.loading = true;
    this.openGraphService.fetchOGImage(this.targetURL).subscribe(
      (data) => {
        this.ogImage = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching Open Graph image', error);
        this.loading = false;
      }
    );
  }
}
