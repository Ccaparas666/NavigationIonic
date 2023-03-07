import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) {  }
   userinput1: any = 'userinput1';
   userinput2: any = 'userinput12';
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.userinput1 = params['userinput1'];
      this.userinput2 = params['userinput2'];

    });
  }

}
