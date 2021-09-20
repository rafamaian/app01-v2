import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [
    { title: 'Adotar', url: '/home', icon: 'caret-up-circle' },
    { title: 'Doar', url: '/', icon: 'caret-down-circle' },
    { title: 'Dúvidas', url: '/', icon: 'help-circle' },
    { title: 'Suporte', url: '/', icon: 'information-circle' },
  ];
  constructor(public auth: AngularFireAuth) {}
}
