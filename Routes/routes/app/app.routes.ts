import { Routes, RouterModule } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

export const routes: Routes = [
    { path: '', redirectTo: 'component-one', pathMatch: 'full' },
    { path: 'component-one', component: ComponentOneComponent },
    { path: 'component-two', component: ComponentTwoComponent },
    { path: 'component-two/:id', component: ComponentTwoComponent }
  ];
  
  export const appRoutingProviders: any[] = [];
  
  export const routing = RouterModule.forRoot(routes);