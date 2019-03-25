import { Component, OnInit } from '@angular/core';
import "bootstrap";
import {UniteMesureService} from "../../controller/service/unite-mesure.service";
import "bootstrap";
@Component({
  selector: 'app-unite-mesure-create',
  templateUrl: './unite-mesure-create.component.html',
  styleUrls: ['./unite-mesure-create.component.css']
})
export class UniteMesureCreateComponent implements OnInit {

  constructor(private unitService:UniteMesureService) { }

  ngOnInit() {
  }
  public get unite(){
    return this.unitService.uniteMesureCreate;
  }
  public saveUnite(){
    return this.unitService.saveUnite();
  }

}
