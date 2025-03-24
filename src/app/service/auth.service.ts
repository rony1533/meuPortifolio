import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root',
})
export class Auth {

  constructor(private afAuth: AngularFireAuth) {}

  authenticateAnonymously() {
    this.afAuth.signInAnonymously()
      .then((userCredential) => {
        console.log('Usuário autenticado anonimamente', userCredential.user);
      })
      .catch((error) => {
        console.error('Erro na autenticação anônima', error);
      });
  }
  
}
