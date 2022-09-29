import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- [color]="'primary'" -->
    <mat-toolbar color="primary">
      <img
        width="40"
        alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
      />
      <span>My Application</span>
      <!-- flex spacer -->
      <div class="spacer"></div>
      <!-- iconne login -->
      <mat-icon aria-hidden="false" aria-label="login" fontIcon="login">login</mat-icon>
      <!-- iconne logout -->
      <mat-icon aria-hidden="false" aria-label="logout" fontIcon="login">logout</mat-icon>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
