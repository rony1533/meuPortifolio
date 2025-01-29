import { Injectable } from "@angular/core";
import { Portfolio } from "../my-profile/model/portifolio.model";
import { AngularFirestore, DocumentData } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";

interface MyData extends DocumentData {
    field1: string;
    field2: number;
  }

@Injectable({
    providedIn: 'root',
})
export class DataService {

    // constructor(private fs: AngularFirestore) { }

    // items: Observable<any[]> | undefined;

    // getPortfolio() {
    //     this.items= this.fs.collection('portifolios').valueChanges();
    //     return this.items
    // }

    // addTest() {
    //     let test = {test: 'oiii'};
    //     let noteCollection = collection(this.fs,'teste');
    //     return addDoc(noteCollection, test);
    // }
}