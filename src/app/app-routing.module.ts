import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './product/products-list/products-list.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
    data: { animation: 'ProductsPage' },
  },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
