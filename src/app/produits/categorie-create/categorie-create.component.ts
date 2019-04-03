import { Component, OnInit } from '@angular/core';
import "bootstrap";
import {CategorieService} from "../../controller/service/categorie.service";
import "bootstrap";
import {Categorie} from '../../controller/model/categorie.model';
import "hover.css";
@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.css']
})
export class CategorieCreateComponent implements OnInit {

  constructor(private categorieService:CategorieService) { }

  ngOnInit() {
    this.categorieService.findAll();
  }
  public get categorieCreate(){

    return this.categorieService.categorieCreate;
  }
  public saveCategorie(){
    this.categorieService.saveCategorie();
  }
  public get categories()
  {
    return this.categorieService.categories;
  }
  public deleteCat(categorie:Categorie)
  {
    this.categorieService.deleteCat(categorie.referenceCategorie);
    this.categories.splice(
      this.categories.indexOf(categorie),1
    );
  }

}
