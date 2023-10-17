import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnService {

  constructor(private http: HttpClient) { }
  addAnnonce(nAnnonce:any) {
    return this.http.post(
      'https://annonces-dfcc9-default-rtdb.europe-west1.firebasedatabase.app/Annonce.json',
      nAnnonce
    );
  }
  getAllAnnonces() {
    return this.http.get(
      'https://annonces-dfcc9-default-rtdb.europe-west1.firebasedatabase.app/Annonce.json'
    );
  }

  getOnebyId(id: string) {
    return this.http.get(
      `https://annonces-dfcc9-default-rtdb.europe-west1.firebasedatabase.app/Annonce/${id}.json`
    );
  }
}
