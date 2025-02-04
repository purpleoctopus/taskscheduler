import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/pages/main-page/main-page.component').then((m) => m.MainPageComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./components/pages/projects/projects.component').then((m) => m.ProjectsComponent)
    },
    {
        path: 'settings',
        loadComponent: () => import('./components/pages/settings/settings.component').then((m) => m.SettingsComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }
];
