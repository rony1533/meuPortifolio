import { Injectable } from "@angular/core";
import { Portfolio } from "../my-profile/model/portifolio.model";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class DataService {

    constructor(private fs: AngularFirestore) { }

    items: Observable<Portfolio[]> | undefined;

    async getPortfolio() {
        return this.fs.collection('portifolios').valueChanges();
    }

}