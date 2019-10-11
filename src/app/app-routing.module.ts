import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{
    //path: '',
   // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  //},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'twitte', loadChildren: './twitte/twitte.module#TwittePageModule' },
  { path: 'show-all-twitte', loadChildren: './show-all-twitte/show-all-twitte.module#ShowAllTwittePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
