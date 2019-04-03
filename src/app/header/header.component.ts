import { Component, OnInit } from '@angular/core';
import "bootstrap";
import * as $ from 'jquery';
import "hover.css";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      let imgShow = $(window).height();
      $(".imgMarket").css("height",imgShow);
    });
  }

}
