import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
{path:'',redirectTo:'/add',pathMatch:'full'},
{path:'add',component:AddComponent},
{path:'welcome',component:WelcomeComponent},
{path:'create',component:CreateComponent},

{path:'**',component:NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
