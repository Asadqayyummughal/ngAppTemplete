import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
   {
    path:'',
    component:LayoutComponent,
    children:[
        {
            path:"home",
            loadChildren:()=>import('./features/home/home.module').then(m=>m.HomeModule)
        },
        {
            path:"about-us",
            loadChildren:()=>import('./features/about-us/about-us.module').then(m=>m.AboutUsModule)
        }
    ],
   },
   {
    path:'**',
    redirectTo:''
   }
];
