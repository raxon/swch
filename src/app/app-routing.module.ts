import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GeneratorComponent } from './pages/generator/generator.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
 { path: '', component: HomeComponent },
{
  path: 'generator',
  component: GeneratorComponent,
  canActivate: [AuthGuardService]
},
{ path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
