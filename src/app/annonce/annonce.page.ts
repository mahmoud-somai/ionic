import { Component, OnInit } from '@angular/core';
import { AnnService } from '../ann.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {
  allannonces: any;
  user:any;



  constructor(private AnnonceService:AnnService){

   }



  getAnnonces() {

    this.allannonces = [];
    this.AnnonceService.getAllAnnonces().subscribe({
      next: (response: {[key: string]: any}) => {
        for (const key in response) {
          if (response[key].user === this.user) {
            this.allannonces.push({ id: key, ...response[key] });
          }
        }
        console.log(this.allannonces);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }


  ngOnInit() {
    this.user = localStorage.getItem('username');
    this.getAnnonces();
  }

}
