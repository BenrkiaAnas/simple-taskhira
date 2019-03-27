import {Categorie} from "./categorie.model";
import {UniteMesure} from "./unite-mesure.model";

export class Produit {
  public categorieVo:Categorie = new Categorie('','');
  public uniteMesureVo:UniteMesure = new UniteMesure('','');
  constructor(public referenceProduit:String , public libelle:String , public qteStock:number ,public image:String){}
}

