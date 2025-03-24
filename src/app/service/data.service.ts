import { Injectable } from "@angular/core";
import { Portfolio } from "../my-profile/model/portifolio.model";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class DataService {

    constructor(private fs: AngularFirestore) { }

    getPortfolio(): Observable<Portfolio[]> {
        return this.fs.collection<Portfolio>('portifolios').valueChanges();
    }
}
