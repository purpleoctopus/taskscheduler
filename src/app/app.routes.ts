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
        path: 'invite/:projectId',
        loadComponent: () => import('./components/pages/employees-explorer/employees-explorer.component').then((m) => m.EmployeesExplorerComponent)
    },
    {
        path: 'project/:id',
        loadComponent: () => import('./components/core/project-view/project-view.component').then((m) => m.ProjectViewComponent)
    },
    {
        path: 'notifications',
        loadComponent: () => import('./components/pages/notification/notification.component').then((m) => m.NotificationComponent)
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
