import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { AuthGuard } from './pages/admin/login/auth.guard';
import { LoginComponent } from './pages/admin/login/login.component';
import { InicialComponent } from './pages/inicial/inicial.component';
import { NovoRegistroComponent } from './pages/novo-registro/novo-registro.component';
import { VisualizarFichaComponent } from './pages/visualizar-ficha/visualizar-ficha.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: InicialComponent },
      { path: 'inicial', component: InicialComponent },
      { path: 'inicial/:id', component: InicialComponent },
      { path: 'novo/:acao/:id', component: NovoRegistroComponent },
      { path: 'visualizar/:id', component: VisualizarFichaComponent }
    ],
    canActivate: [AuthGuard],
  },

  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
