import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UniteMesure} from "../model/unite-mesure.model";

@Injectable({
  providedIn: 'root'
})
export class UniteMesureService {
  private _url:string = "http://localhost:8082/categorie-api/categories/";
  private _url_unit = "http://localhost:8082/unite-api/unites/creeUnite";
  private _url_unit_find = "http://localhost:8082/unite-api/unites/all";
  private _url_unit_del = "http://localhost:8082/unite-api/unites/delete/";
  private _uniteMesureCreate:UniteMesure = new UniteMesure('','');
  private _unites:Array<UniteMesure>;

  constructor(private http:HttpClient) { }
  public saveUnite(){
    this.http.post<UniteMesure>(this._url_unit,this._uniteMesureCreate).subscribe(
      data=>{
        console.log("ok");
        this._uniteMesureCreate = new UniteMesure('','');
        console.log(this._uniteMesureCreate);
      },error=>{
        console.log("erreur");
      }
    );
  }
  public findAll()
  {
    if(this._unites == null)
    {
      this.http.get<Array<UniteMesure>>(this._url_unit_find).subscribe(
        data=>{
          this._unites=data;
        },error =>{
          console.log("error while loading Unite Mesure ...");
        }
      );
    }
  }
  public deleteUnit(referenceUnit:String)
  {
    this.http.delete<UniteMesure>(this._url_unit_del+referenceUnit).subscribe(
      data=>{
        console.log("ok");
      },error1 => {
        console.log("Error");
      }
    );
  }


  get url_unit_find(): string {
    return this._url_unit_find;
  }

  set url_unit_find(value: string) {
    this._url_unit_find = value;
  }

  get unites(): Array<UniteMesure> {
    if(this._unites == null)
    {
      this.http.get<Array<UniteMesure>>(this._url_unit_find).subscribe(
        data=>{
          this._unites=data;
        },error =>{
          console.log("error while loading Unite Mesure ...");
        }
      );
    }
    return this._unites;
  }

  set unites(value: Array<UniteMesure>) {
    this._unites = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get url_unit(): string {
    return this._url_unit;
  }

  set url_unit(value: string) {
    this._url_unit = value;
  }

  get uniteMesureCreate(): UniteMesure {
    return this._uniteMesureCreate;
  }

  set uniteMesureCreate(value: UniteMesure) {
    this._uniteMesureCreate = value;
  }

  get url_unit_del(): string {
    return this._url_unit_del;
  }

  set url_unit_del(value: string) {
    this._url_unit_del = value;
  }
}
