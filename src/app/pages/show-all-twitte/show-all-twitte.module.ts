import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowAllTwittePage } from './show-all-twitte.page';
//import { LoginPage } from '../auth/login/login.page';
//import { RegisterPage } from '../auth/register/register.page';

const routes: Routes = [
  {
    path: '',
    component: ShowAllTwittePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShowAllTwittePage],
  //entryComponents: [LoginPage, RegisterPage]
  
})
export class ShowAllTwittePageModule {}
