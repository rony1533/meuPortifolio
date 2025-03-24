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

    async getPortfolio() {
        const portfolioCollection = collection(this.db, 'portifolios');
        const snapshot = await getDocs(portfolioCollection);
        const portfolioList = snapshot.docs.map(doc => doc.data());
        console.log(portfolioList);
        return portfolioList;
      }
}
