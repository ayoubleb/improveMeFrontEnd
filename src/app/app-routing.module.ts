import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Shell} from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'pm', loadChildren: './pm/pm.module#PmModule' },
    { path: 'register', loadChildren: './register/register.module#RegisterModule' },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, enableTracing: true})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
