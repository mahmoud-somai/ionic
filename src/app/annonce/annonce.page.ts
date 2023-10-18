import { Component, OnInit } from '@angular/core';
import { AnnService } from '../ann.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.page.html',
  styleUrls: ['./annonce.page.scss'],
})
export class AnnoncePage implements OnInit {
  allannonces: any;
  user:any;
  annonceId:any;



  constructor(private AnnonceService:AnnService,
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private router: Router){

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




  async presentDeleteConfirmation(annonceId:string) {


    const alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: 'Etes vous sur de vouloir supprimer ce task ?',
      buttons: [
        'No',
        {
          text: 'Yes',
          handler: () => {
            this.AnnonceService.deleteAnnonce(annonceId).subscribe({
              next: (response) => {
               console.log(response);
               console.log("deleted");

              },
              error: (err) => {
                console.log(err);
              },
            });
            this.router.navigateByUrl('/annonce');
          },
        },
      ],
    });

    await alert.present();
  }




  ngOnInit() {
    this.user = localStorage.getItem('username');
    this.getAnnonces();
  }

}
