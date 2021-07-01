import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // 3) Atributos do script
  private itemsCollection: AngularFirestoreCollection;
  public items: Observable<any>;

  constructor(
    // 2) Injeta dependências
    private afs: AngularFirestore
  ) {

    // 4) Acessa e obtém dados da coleção
    this.itemsCollection = afs.collection('articles');
    this.items = this.itemsCollection.valueChanges();

  }

  ngOnInit() {
  }

}
