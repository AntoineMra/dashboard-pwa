import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GuardGuard } from './auth/guard.guard';
import { LoginComponent } from './auth/login/login.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { VisualsComponent } from './visuals/visuals.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', canActivate: [GuardGuard],component: AdminComponent },
  { path: 'visual', canActivate: [GuardGuard],component: VisualsComponent },
  { path: 'form', canActivate: [GuardGuard],component:  FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
