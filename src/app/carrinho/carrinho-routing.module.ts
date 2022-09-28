import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho.component';

const routes: Routes = [{ path: '', component: CarrinhoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule,FormsModule],
  exports: [RouterModule]
})
export class CarrinhoRoutingModule { }
