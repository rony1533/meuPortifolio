import { Injectable } from "@angular/core";
import { Portfolio } from "../my-profile/model/portifolio.model";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { environment } from "src/environments/environment";
import { initializeApp } from "firebase/app";

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private db = getFirestore(initializeApp(environment.firebaseConfig));
    constructor() { }

    async getPortfolio(): Promise<Portfolio[]> {
        const portfolioCollection = collection(this.db, 'portifolios');
        const snapshot = await getDocs(portfolioCollection);
    // Mapeando os documentos para o tipo Portfolio
    const portfolioList: Portfolio[] = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          title: data["title"],
          imageUrl: data["imageUrl"],
          linkHref: data["linkHref"],
          technologiesUsed: data["technologiesUsed"] || [] // Caso não haja o campo, retorna um array vazio
        };
      });
  
      console.log(portfolioList); // Exibindo o resultado no console
      return portfolioList;
      }
}
