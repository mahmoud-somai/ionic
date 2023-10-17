import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {AngularFireAuth} from "@angular/fire/compat/auth";
//import {AngularFirestore} from "@angular/fire/compat/firestore";




@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient,
   //  public firestore:AngularFirestore,
  //   public auth:AngularFireAuth,
    ) { }

/*
loginwithemail(data:any){
  return this.auth.signInWithEmailAndPassword(data.email,data.password)
}
signup(data:any){
  return this.auth.createUserWithEmailAndPassword(data.email,data.password)
}

getDetails(data:any){
  return this.firestore.collection('users').doc(data.uid).valueChanges()
}
saveDetails(data:any){
  return this.firestore.collection('users').doc(data.uid).set(data)
}

*/

  Register(User:any) {
    return this.http.post(
      'https://annonces-dfcc9-default-rtdb.europe-west1.firebasedatabase.app/User.json',
      User
    );
  }

  Login(UserEmail:any,UserPassword:any) {
    return this.http.post(
      'https://annonces-dfcc9-default-rtdb.europe-west1.firebasedatabase.app/User.json',
      UserEmail, UserPassword
    );
  }

  getAllUsers() {
    return this.http.get(
      'https://annonces-dfcc9-default-rtdb.europe-west1.firebasedatabase.app/User.json'
    );
  }


}
