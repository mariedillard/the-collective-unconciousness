import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnconciousnessComponent } from './unconciousness/unconciousness.component';

const appRoutes: Routes = [ 
    {
        path: '',
        component: UnconciousnessComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);