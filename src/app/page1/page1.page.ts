import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private navCtrl: NavController) { }
  userinput1: any = '';
  userinput2: any = '';
  GotoOutputPage(){
    const userinput1 = (document.getElementById('user-input1')as HTMLInputElement).value;

    const userinput2 = (document.getElementById('user-input2')as HTMLInputElement).value;

    this.navCtrl.navigateForward(['/page2',{userinput1, userinput2}]);
  }

  ngOnInit() {
  }

}
