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
   userinput1: any = 'user-input1';
   userinput2: any = 'user-input2';
   Sum: any = 'Sum';
   Mul: any = 'Mul';
   Div: any = 'Div';
   Sub: any = 'Sub';
   Mod: any = 'Mod';

   GotoInputPage(){
    this.navCtrl.navigateBack(['/page1']);
    this.clearTextArea();
   }
   clearTextArea(){
    const textarea1 = document.querySelector(
      '#user-input1'
    ) as HTMLIonInputElement;
    textarea1.value='';

    const textarea2 = document.querySelector(
      '#user-input2'
    ) as HTMLIonInputElement;
    textarea2.value='';
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.userinput1 = params['userinput1'];
      this.userinput2 = params['userinput2'];
      this.Sum = params['Sum'];
      this.Mul = params['Mul'];
      this.Div = params['Div'];
      this.Sub = params['Sub'];
      this.Mod = params['Mod'];

    });
  }

}
