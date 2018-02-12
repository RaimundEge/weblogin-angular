import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { SigninComponent } from '../signin/signin.component';
import { RegisterComponent } from '../register/register.component';
import { ContentComponent } from '../content/content.component';
import { AuthGuardService } from '../auth-guard/auth-guard.service'

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuardService] }, 
    { path: 'content', component: ContentComponent, canActivate: [AuthGuardService] }  
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [ RouterModule ],
    providers: [ AuthGuardService ]
})

export class AppRoutingModule { }