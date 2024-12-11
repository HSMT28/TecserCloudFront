import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './layout/login/login.component';
import { AdminusuarioComponent } from './layout/adminusuario/adminusuario.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', redirectTo: '/layout', pathMatch:'full'},
    { path: 'layout', component: LayoutComponent, children: [
        { path: 'login', component: LoginComponent },
        { path: 'adminusuario', component: AdminusuarioComponent }
      ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
