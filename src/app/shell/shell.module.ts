import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell.component';
import { FooterComponent } from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
    FooterComponent
  ]
})
export class ShellModule {
}
