import { Component, OnInit } from '@angular/core';


import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.afAuth.signOut();
}
}
