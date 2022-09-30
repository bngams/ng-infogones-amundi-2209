import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Route, RouterModule, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AdminGuard } from './modules/admin/guards/admin.guard';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'login', canActivate: [], component: LoginComponent },
  { path: 'admin', canLoad: [AdminGuard], loadChildren: () => import('./modules/admin/admin.module').then(result => result.AdminModule) },
  { path: 'products', data: { preload: true }, loadChildren: () => import('./modules/product/product.module').then(result => result.ProductModule) },
  { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(result => result.CartModule) },
  // keep at the end ** = capture all
  { path: '**', component: NotFoundComponent }
];

export class PreloadTaggedModuleStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
           return route.data && route.data['preload'] ? load() : of(null);
    }
}

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
      // preloadingStrategy: PreloadTaggedModuleStrategy
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
