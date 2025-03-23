import { Injectable } from "@angular/core";
import { Portfolio } from "../my-profile/model/portifolio.model";
import { AngularFirestore, DocumentData } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

interface Item extends DocumentData {
    imageUrl: string;
    linkHref: string;
    technologiesUsed: Array<string>[];
    title: string;
  }

@Injectable({
    providedIn: 'root',
})
export class DataService {

    constructor(private fs: AngularFirestore) { }

    items: Observable<unknown[]> | undefined;

    async getPortfolio() {

        this.items = this.fs.collection('portifolios').valueChanges();
        return this.items
    }

}