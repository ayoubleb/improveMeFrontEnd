import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {Shell} from './shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: './about/about.module#AboutModule' }
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
