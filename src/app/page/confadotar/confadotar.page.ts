import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confadotar',
  templateUrl: './confadotar.page.html',
  styleUrls: ['./confadotar.page.scss'],
})
export class ConfadotarPage implements OnInit {

  private id: string;

  constructor(// Usuário autenticado
    public auth: AngularFireAuth,
    public afs: AngularFirestore,
    // routerLInk
    public router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

        // Obter o ID da rota e armazena em id
        this.id = this.activatedRoute.snapshot.paramMap.get('petid');
  }

  ionViewWillEnter() {
    this.auth.onAuthStateChanged((userData) => {
      if (userData) {
        this.afs.firestore
          .doc(`register/${userData.uid}`)
          .get()
          .then((uData) => {
            // Se não tem perfil
            if (uData.exists) {
              console.log('gerar whatsapp');
            } else {
              this.router.navigate(['/user/register']);
            }
          });
      } else {
        this.router.navigate(['/user/login']);
      }
    });
  }

}
