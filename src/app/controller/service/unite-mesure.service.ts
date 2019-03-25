import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UniteMesure} from "../model/unite-mesure.model";

@Injectable({
  providedIn: 'root'
})
export class UniteMesureService {
  private _url:string = "http://localhost:8082/categorie-api/categories/";
  private _url_unit = "http://localhost:8082/unite-api/unites/creeUnite";
  private _uniteMesureCreate:UniteMesure = new UniteMesure('','');

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
}
