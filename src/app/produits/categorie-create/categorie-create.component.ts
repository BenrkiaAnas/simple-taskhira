import { Component, OnInit } from '@angular/core';
import "bootstrap";
import {CategorieService} from "../../controller/service/categorie.service";
import "bootstrap";
@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.css']
})
export class CategorieCreateComponent implements OnInit {

  constructor(private categorieService:CategorieService) { }

  ngOnInit() {
  }
  public get categorieCreate(){

    return this.categorieService.categorieCreate;
  }
  public saveCategorie(){
    this.categorieService.saveCategorie();
  }

}
