import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSttingsComponent } from './account-sttings/account-sttings.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component : PagesComponent,
        children: [
            {path: '', component : DashboardComponent},
            {path: 'progress', component : ProgressComponent},
            {path: 'graficas1', component : Graficas1Component},
            {path: 'account-settings', component: AccountSttingsComponent}
            
        ]
    },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
