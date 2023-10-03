import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './secommerce/components/pages/home/home.component';
import { ProductDetailComponent } from './secommerce/components/shared/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }, // Redirecionar para 'home'
  { path: 'home', component: HomeComponent },
  { path: 'prodetalhe', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
