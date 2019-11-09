import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{
    //path: '',
   // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  //},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'twitte', loadChildren: './pages/twitte/twitte.module#TwittePageModule' },
  { path: 'show-all-twitte', loadChildren: './pages/show-all-twitte/show-all-twitte.module#ShowAllTwittePageModule' },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },
  
  { path: 'show-mytwittes', loadChildren: './pages/show-mytwittes/show-mytwittes.module#ShowMytwittesPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
