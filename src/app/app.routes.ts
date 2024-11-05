import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: 'welcome', component: ProfileComponent, title: 'My portfolio' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // ToDo: component: PageNotFoundComponent
];
