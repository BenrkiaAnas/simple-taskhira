import { Component, OnInit } from '@angular/core';
import "bootstrap";
import {ProduitService} from "../../controller/service/produit.service";
import {Categorie} from "../../controller/model/categorie.model";
import {UniteMesure} from "../../controller/model/unite-mesure.model";
import {Produit} from '../../controller/model/produit.model';
import "hover.css";
@Component({
  selector: 'app-produit-create',
  templateUrl: './produit-create.component.html',
  styleUrls: ['./produit-create.component.css']
})
export class ProduitCreateComponent implements OnInit {

  constructor(private produitService:ProduitService) { }

  ngOnInit() {
    this.produitService.findAll();
  }
  public get categories():Array<Categorie>
  {
    return this.produitService.categories;
  }
  public get unites():Array<UniteMesure>
  {
    return this.produitService.unites;
  }
  public saveProduit()
  {
     this.produitService.saveProduit();
  }
  public get produits(){
    return this.produitService.produiCreate;
  }

  public get produitsAll(){
    return this.produitService.produits;
  }
  public deleteProduit(produit:Produit)
  {
    this.produitService.deletePro(produit.referenceProduit);
    this.produitsAll.splice(
      this.produitsAll.indexOf(produit),1
    );
  }


}
