import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategorieCreateComponent } from './produits/categorie-create/categorie-create.component';
import { ProduitCreateComponent } from './produits/produit-create/produit-create.component';
import { UniteMesureCreateComponent } from './produits/unite-mesure-create/unite-mesure-create.component';
import { HeaderComponent } from './header/header.component';
import { TaskhiraComponent } from './allcreation/taskhira.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    CategorieCreateComponent,
    ProduitCreateComponent,
    UniteMesureCreateComponent,
    HeaderComponent,
    TaskhiraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
