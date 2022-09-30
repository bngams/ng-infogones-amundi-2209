import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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
      <!-- menu -->
      <nav>
        <ul>
          <li class="menu-item"><a [routerLink]="['/home']" routerLinkActive="active">Home</a></li>
          <li class="menu-item"><a routerLink="/get-started" routerLinkActive="active">Get Started</a></li>
          <li class="menu-item"><a routerLink="/products" routerLinkActive="active">Products</a></li>
          <li class="menu-item" *ngIf="authService.isLoggedIn">
            <a routerLink="/admin" routerLinkActive="active">Admin</a>
          </li>
          <li class="menu-item"><a routerLink="/cart" routerLinkActive="active">Cart</a></li>
          <li class="menu-item" *ngIf="!authService.isLoggedIn">
            <a routerLink="/login" routerLinkActive="active">
              <mat-icon aria-hidden="false" aria-label="login" fontIcon="login">login</mat-icon>
            </a>
          </li>
          <li class="menu-item" *ngIf="authService.isLoggedIn">
            <a href="#">
              <mat-icon aria-hidden="false" aria-label="login" fontIcon="logout">logout</mat-icon>
            </a>
          </li>
        </ul>
      </nav>      
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1;
    }

    ul {
      list-style-type: none;
      display: flex;
    }

    .menu-item {
      margin: 0 15px;
      color: #FFF;
    }

    .menu-item a{
      color: #FFF;
      text-decoration: none;
    }

    .menu-item .active {
        font-weight: bolder;
        text-decoration: underline;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor(readonly authService: AuthService) { }

  ngOnInit(): void {
  }

}
