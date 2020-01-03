import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';



export const USERS_ROUTES: Routes = [{ path: 'register', component: RegisterComponent },
{ path: 'login', component: LoginComponent }
];