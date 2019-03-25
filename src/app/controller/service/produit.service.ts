import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categorie} from "../model/categorie.model";
import {UniteMesure} from "../model/unite-mesure.model";
import {Commande} from "../../../../../commande-v6/src/app/controller/model/commande.model";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private _url_prd = "http://localhost:8082/produit-api/produits/creeProduit";
  private _url_cat = "http://localhost:8082/categorie-api/categories/all";
  private _url_unit = "http://localhost:8082/unite-api/unites/all";
  private _categories:Array<Categorie>;
  private _unites:Array<UniteMesure>;

  constructor(private _http:HttpClient) { }
  /*public allCategorie(referenceCategorie1:string):Array<Categorie>{
    this._http.get<Array<Categorie>>(this._url_cat+"/categorie/find?referenceCategorie="+referenceCategorie1).subscribe(
      data=>{
        this._categories = data;
        console.log(" success");

      },error1 => {
        console.log("erroorr");

      }
    );
    return this._categories;
  }

  public allUnit(reference1:string):Array<UniteMesure>{
    this._http.get<Array<UniteMesure>>(this._url_unit+"/unite/find?referenceUnit="+reference1).subscribe(
      data=>{
        this._unites = data;
        console.log(" success");

      },error1 => {
        console.log("erroorr");

      }
    );
    return this._unites;
  }*/



  get url_prd(): string {
    return this._url_prd;
  }

  set url_prd(value: string) {
    this._url_prd = value;
  }

  get url_cat(): string {
    return this._url_cat;
  }

  set url_cat(value: string) {
    this._url_cat = value;
  }

  get url_unit(): string {
    return this._url_unit;
  }

  set url_unit(value: string) {
    this._url_unit = value;
  }

  get categories(): Array<Categorie> {
    if(this._categories == null)
    {
      this.http.get<Array<Categorie>>(this._url_cat).subscribe(
        data=>{
          this._categories=data;
        },error =>{
          console.log("error while loading commandes ...");
        }
      );
    }
    return this._categories;
  }

  set categories(value: Array<Categorie>) {
    this._categories = value;
  }

  get unites(): Array<UniteMesure> {
    if(this._unites == null)
    {
      this.http.get<Array<UniteMesure>>(this._url_unit).subscribe(
        data=>{
          this._unites=data;
        },error =>{
          console.log("error while loading commandes ...");
        }
      );
    }
    return this._unites;
  }

  set unites(value: Array<UniteMesure>) {
    this._unites = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
