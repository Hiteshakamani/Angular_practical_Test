import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SigninComponent } from './user/signin/signin.component';
import { SearchItemComponent } from './details/search-item/search-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'front', pathMatch: 'full' },

  {path:'front',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'search/:query', component: SearchItemComponent }
  { path: 'search/:searchTerm', component: SearchItemComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
