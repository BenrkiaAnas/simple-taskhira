import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../model/categorie.model';
import {UniteMesure} from '../model/unite-mesure.model';
import {Produit} from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private _url_pd = "http://localhost:8082/produit-apis/produits/";
  private _url_cat = "http://localhost:8082/categorie-api/categories/all";
  private _url_unit = "http://localhost:8082/unite-api/unites/all";
  private _url_pd_find = "http://localhost:8082/produit-apis/produits/all";
  private _url_pd_del = "http://localhost:8082/produit-apis/produits/delete/";
  private _categories:Array<Categorie>;
  private _unites:Array<UniteMesure>;
  private _produiCreate:Produit = new Produit('','',0,'');
  private _produits:Array<Produit>;

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
  public saveProduit(){
    console.log("Cree Produit");
    console.log(this._produiCreate);
    this._http.post<Produit>(this._url_pd,this._produiCreate).subscribe(
      data=>{
        this._produiCreate = new Produit('','',0,'');
        console.log("Ajoute avec success");
      },error1 => {

        console.log("error");
      }
    );

  }
  public findAll()
  {
    if(this._produits == null)
    {
      this._http.get<Array<Produit>>(this._url_pd_find).subscribe(
        data=>{
          this._produits = data;
        },error1 => {
          console.log("Errrrrooooooooooooooooor");
        }
      );
    }
  }
  public deletePro(referenceProduit:String)
  {
    this._http.delete<Produit>(this._url_pd_del+referenceProduit).subscribe(
      data=>
      {
        console.log("ok");
      },error1 => {
        console.log("Error");
      }
    );
  }


  get url_pd_find(): string {
    return this._url_pd_find;
  }

  set url_pd_find(value: string) {
    this._url_pd_find = value;
  }

  get produits(): Array<Produit> {
    if(this._produits == null)
    {
      this._http.get<Array<Produit>>(this._url_pd_find).subscribe(
        data=>{
          this._produits = data;
        },error1 => {
          console.log("Errrrrooooooooooooooooor");
        }
      );
    }
    return this._produits;
  }

  set produits(value: Array<Produit>) {
    this._produits = value;
  }

  get url_pd(): string {
    return this._url_pd;
  }

  set url_pd(value: string) {
    this._url_pd = value;
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

  get produiCreate(): Produit {
    return this._produiCreate;
  }

  set produiCreate(value: Produit) {
    this._produiCreate = value;
  }
}
