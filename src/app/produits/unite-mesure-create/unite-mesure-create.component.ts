import { Component, OnInit } from '@angular/core';
import "bootstrap";
import {UniteMesureService} from "../../controller/service/unite-mesure.service";
import "bootstrap";
import {UniteMesure} from '../../controller/model/unite-mesure.model';
@Component({
  selector: 'app-unite-mesure-create',
  templateUrl: './unite-mesure-create.component.html',
  styleUrls: ['./unite-mesure-create.component.css']
})
export class UniteMesureCreateComponent implements OnInit {

  constructor(private unitService:UniteMesureService) { }

  ngOnInit() {
    this.unitService.findAll();
  }
  public get unite(){
    return this.unitService.uniteMesureCreate;
  }
  public saveUnite(){
    return this.unitService.saveUnite();
  }
  public get unites()
  {
    return this.unitService.unites;
  }
  public deleteUnit(uniteMesur:UniteMesure)
  {
    this.unitService.deleteUnit(uniteMesur.referenceUnit);
    this.unites.splice(
      this.unites.indexOf(uniteMesur),1
    );
  }


}
