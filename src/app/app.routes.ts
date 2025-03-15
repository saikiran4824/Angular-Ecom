import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';

export const routes: Routes = [
    {
        path:'',
        component:ProductListComponent
    },

    {
        path:'**',
        component:ProductListComponent
    }
];
