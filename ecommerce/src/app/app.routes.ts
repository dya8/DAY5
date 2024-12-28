import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Assuming HomeComponent is defined in home.component.ts
import { ProductComponent } from './pages/product/product.component';
export const routes: Routes = [
    { path: '', component: HomeComponent 

    },
    {
        path:'product/:id',component:ProductComponent
    }
    
];

