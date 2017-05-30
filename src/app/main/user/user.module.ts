import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes,RouterModule } from '@angular/router'

export const routes:Routes=[
{ path: '', component: UserComponent, pathMatch: 'full' },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserComponent]
})
export class UserModule { }
