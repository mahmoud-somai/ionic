import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AnnService } from '../ann.service';

@Component({
  selector: 'app-one-annonce',
  templateUrl: './one-annonce.page.html',
  styleUrls: ['./one-annonce.page.scss'],
})
export class OneAnnoncePage implements OnInit {
  selectedAnnonce:any;

  constructor(private route: ActivatedRoute,
    private AnnService:AnnService ,

    private router: Router) { }

    getOne(){
      this.route.paramMap.subscribe((params) => {
        const id = params.get('id');
        console.log(id);

        if (id) {
          this.AnnService.getOnebyId(id).subscribe((annonce) => {
            this.selectedAnnonce = annonce;
            console.log(this.selectedAnnonce);

          });
        }
    })}

  ngOnInit() {
    this.getOne();
  }

}
