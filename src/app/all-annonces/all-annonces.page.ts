import { Component, OnInit } from '@angular/core';
import { AnnService } from '../ann.service';

@Component({
  selector: 'app-all-annonces',
  templateUrl: './all-annonces.page.html',
  styleUrls: ['./all-annonces.page.scss'],
})
export class AllAnnoncesPage implements OnInit {
  allannonces: any;




  constructor(private AnnonceService:AnnService) { }


  getAnnonces() {
    this.allannonces = [];
    this.AnnonceService.getAllAnnonces().subscribe({
      next: (response: {[key: string]: any}) => {
        for (const key in response) {
          this.allannonces.push({ id: key, ...response[key] });
        }
        console.log(this.allannonces);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit() {
    this.getAnnonces();
  }

}
