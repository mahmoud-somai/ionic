import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnService } from '../ann.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  AnnonceData:any;
  idAnnonce:any;

  constructor(private route: ActivatedRoute,
    private AnnonceService:AnnService) { }

    getOne(){
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id');
        console.log(id);
        this.idAnnonce=id;

        if (id) {
          this.AnnonceService.getOnebyId(id).subscribe((annonce) => {
            this.AnnonceData = annonce;
            console.log(this.AnnonceData);

          });
        }
    })}

    updateAnnonce() {

      this.AnnonceService.updateAnnonce(this.AnnonceData, this.idAnnonce)
        .subscribe(
          {
            next: (response) => {
              console.log('Annonce updated successfully:', response);
            },
            error: (err) => {
              console.error('An error occurred:', err);
            },
          }
        );
    }


  ngOnInit() {
    this.getOne()
  }

}
