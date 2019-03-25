import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categorie} from "../model/categorie.model";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private _url:string = "http://localhost:8082/categorie-api/categories/";
  private _url_cat = "http://localhost:8082/categorie-api/categories/creeCategorie";
  private _categorieCreate:Categorie = new Categorie('','');

  constructor(private http:HttpClient) { }

  public saveCategorie(){
    console.log("invok methode save ");
    console.log(this.categorieCreate);
    this.http.post<Categorie>(this._url_cat,this._categorieCreate).subscribe(
      data=>{
        console.log("ok");
        this._categorieCreate = new Categorie('','');
      },error=>{
        console.log("erreur");
      }
    );
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get url_cat(): string {
    return this._url_cat;
  }

  set url_cat(value: string) {
    this._url_cat = value;
  }

  get categorieCreate(): Categorie {
    return this._categorieCreate;
  }

  set categorieCreate(value: Categorie) {
    this._categorieCreate = value;
  }
}
