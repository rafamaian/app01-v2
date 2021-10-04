import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  items: Observable<any>;

  constructor(
    // Usuário autenticado
    public auth: AngularFireAuth,
    public afs: AngularFirestore,
    // routerLInk
    public router: Router
  ) {

    this.items = afs.collection('animais').valueChanges({ idField: 'id'});

 }

  ngOnInit(): void {}
}
