import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categorie} from "../model/categorie.model";
import Swal from 'sweetalert2';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private _url:string = "http://localhost:8082/categorie-api/categories/";
  private _url_cat = "http://localhost:8082/categorie-api/categories/creeCategorie";
  private _url_cat_find = "http://localhost:8082/categorie-api/categories/all";
  private _url_cat_del = "http://localhost:8082/categorie-api/categories/delete/";
  private _categorieCreate:Categorie = new Categorie('','');
  private _categories:Array<Categorie>;

  constructor(private _http:HttpClient) { }

  public saveCategorie(){
    console.log("invok methode save ");
    console.log(this.categorieCreate);
    this._http.post<Categorie>(this._url_cat,this._categorieCreate).subscribe(
      data=>{
        console.log("ok");
        this._categorieCreate = new Categorie('','');
      },error=>{
        console.log("erreur");
      }
    );
  }
  public findAll() {
    if(this._categories == null)
    {
      this._http.get<Array<Categorie>>(this._url_cat_find).subscribe(

        data=>{
          this._categories = data;
        },error=>{
          console.log("Errooooooooooor");
        }
      );
    }
  }
  public deleteCat(referenceCategorie:String):Observable<Categorie[]>
  {
    return this._http.delete<Categorie[]>(this._url_cat_del+referenceCategorie);
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

  get url_cat_find(): string {
    return this._url_cat_find;
  }

  set url_cat_find(value: string) {
    this._url_cat_find = value;
  }

  get categories(): Array<Categorie> {
    if(this._categories == null)
    {
      this._http.get<Array<Categorie>>(this._url_cat_find).subscribe(
        data=>{
          this._categories = data;
        },error=>{
          console.log("Errooooooooooor");
        }
      );
    }
    return this._categories;
  }

  set categories(value: Array<Categorie>) {
    this._categories = value;
  }

  get url_cat_del(): string {
    return this._url_cat_del;
  }

  set url_cat_del(value: string) {
    this._url_cat_del = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
}
