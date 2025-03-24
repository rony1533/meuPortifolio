import { Injectable } from '@angular/core';
import { getAuth, signInAnonymously } from 'firebase/auth';

@Injectable({
    providedIn: 'root',
})
export class Auth {

  constructor() {}

  authenticateAnonymously() {
    const auth = getAuth();
    signInAnonymously(auth)
      .then((userCredential) => {
        console.log('Usuário autenticado anonimamente', userCredential.user);
      })
      .catch((error) => {
        console.error('Erro na autenticação anônima', error);
      });
  }
  
}
