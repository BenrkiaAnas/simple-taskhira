import { Component, OnInit } from '@angular/core';
import "bootstrap";
import {ProduitService} from "../../controller/service/produit.service";
import {Categorie} from "../../controller/model/categorie.model";
import {UniteMesure} from "../../controller/model/unite-mesure.model";

@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit {

  constructor(private produitService:ProduitService) { }

  ngOnInit() {
  }
  public get categories():Array<Categorie>
  {
    return this.produitService.categories;
  }
  public get unites():Array<UniteMesure>
  {
    return this.produitService.unites;
  }


}
