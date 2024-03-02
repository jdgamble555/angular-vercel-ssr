import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  data = inject(DataService).value;
  title = 'angular-test';
}

