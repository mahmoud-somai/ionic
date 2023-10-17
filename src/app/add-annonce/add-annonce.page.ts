import { Component, OnInit } from '@angular/core';
import { AnnService } from '../ann.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.page.html',
  styleUrls: ['./add-annonce.page.scss'],
})
export class AddAnnoncePage implements OnInit {

  constructor(private AnnonceService:AnnService) { }

  annonceTitle: string = '';
  annoncePrice: number = 0;
  annonceDescription: string = '';
  selectedCategory: string = '';

  addNewAnnonce() {
    let newAnnonce = {
      title: this.annonceTitle,
      price: this.annoncePrice,
      description: this.annonceDescription,
      category: this.selectedCategory,
      date: new Date(),
      user:localStorage.getItem('username')
    };


    this.AnnonceService.addAnnonce(newAnnonce).subscribe({
      next: (response) => {
        console.log('Annonce added successfully:', response);
      },
      error: (err) => {
        console.error('An error occurred:', err);
      },
    });
  }
  ngOnInit() {
  }

}
