import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskhiraComponent} from "./taskhira/taskhira.component";
import {ProduitsComponent} from "./produits/produits.component";

const routes: Routes = [
  {path : 'collection' , component:TaskhiraComponent ,
    children : [
      {path : 'allCollection1' , component:ProduitsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
