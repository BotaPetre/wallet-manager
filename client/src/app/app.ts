import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private apiService: ApiService) {}

  protected readonly title = signal('client 123');

  message = signal('');

  ngOnInit() {
    this.apiService.getMessage().subscribe((res) => {
      if (res && res.message) {
        const c = res.message;
        this.message.set(res.message);
      }
    });
  }
}
