import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Comprueba si el usuario está logueado
  userIsLogged = false;
  user = null;

  constructor() { }

  ngOnInit() {
  }

}
