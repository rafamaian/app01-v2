import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Importar Firebase Guards
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/auth-guard';

// Define redirecionadores
const toLogin = () => redirectUnauthorizedTo(['/login']); // Usuário  não logado
const isLogged = () => redirectLoggedInTo(['/profile']); // Usuário logado

const routes: Routes = [
  // Rota da página inicial
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },

  // Página inicial
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home.module').then((m) => m.HomePageModule),
  },

  // Página de contatos
  {
    path: 'contacts',
    loadChildren: () =>
      import('./page/contacts/contacts.module').then(
        (m) => m.ContactsPageModule
      ),
  },

  // Página sobre
  {
    path: 'about',
    loadChildren: () =>
      import('./page/about/about.module').then((m) => m.AboutPageModule),
  },

  {
    path: 'perfilpet',
    loadChildren: () => import('./page/perfilpet/perfilpet.module').then( m => m.PerfilpetPageModule)
  },
  {
    path: 'perfiluser',
    loadChildren: () => import('./page/perfiluser/perfiluser.module').then( m => m.PerfiluserPageModule),
  },
  {
    path: 'adotar',
    loadChildren: () => import('./page/adotar/adotar.module').then( m => m.AdotarPageModule),
  },
  {
    path: 'loginadotar',
    loadChildren: () => import('./pages/loginadotar/loginadotar.module').then( m => m.LoginadotarPageModule),
  },
  {
    path: 'logindoar',
    loadChildren: () => import('./pages/logindoar/logindoar.module').then( m => m.LogindoarPageModule),
  },
  {
    path: 'adotar',
    loadChildren: () => import('./user/adotar/adotar.module').then( m => m.AdotarPageModule),
  },
  {
    path: 'doar',
    loadChildren: () => import('./user/doar/doar.module').then( m => m.DoarPageModule),
  },
  {
    path: 'edit',
    loadChildren: () => import('./user/edit/edit.module').then( m => m.EditPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then( m => m.RegisterPageModule),
  },
  {
    path: 'confadotar',
    loadChildren: () => import('./page/confadotar/confadotar.module').then( m => m.ConfadotarPageModule),
  },

  // Rota curinga (rotas inexistentes)
  // TEM QUE SER SEMPRE A ÚLTIMA ROTA
  {
    path: '**',
    loadChildren: () =>
      import('./page/e404/e404.module').then((m) => m.E404PageModule),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
