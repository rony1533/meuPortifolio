import { Injectable } from "@angular/core";
import { Firestore, addDoc, collection, collectionData } from "@angular/fire/firestore";
import { Portfolio } from "../my-profile/model/portifolio.model";

@Injectable({
    providedIn: 'root',
})
export class DataService {

    constructor(private fs: Firestore) { }

    getPortfolio() {
        let portfolioCollection= collection(this.fs,'portifolios');
        return collectionData(portfolioCollection, {idField: 'id'})
    }

    addTest() {
        let test = {test: 'oiii'};
        let noteCollection = collection(this.fs,'teste');
        return addDoc(noteCollection, test);
    }
}