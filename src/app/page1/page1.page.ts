import { Component, OnInit } from '@angular/core';
import {NavController,AlertController} from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor(private navCtrl: NavController, private alertController: AlertController) { }
  userinput1: any = '';
  userinput2: any = '';

  checkInput(){
    const userinput1 = document.getElementById('user-input1')as HTMLIonTextareaElement;
    const userinput2 = document.getElementById('user-input2')as HTMLIonTextareaElement;

    if(!userinput1.value || !userinput2.value){
       const alert = this.alertController.create({message: 'Please enter an Input. Thanks.',
       buttons:['OK']});
       alert.then((alert)=> alert.present());
    } else{
      this.GotoOutputPage()
    }
  }
  GotoOutputPage(){
    const userinput1 = (document.getElementById('user-input1')as HTMLInputElement).value;
    const value1 = Number(userinput1);

    const userinput2 = (document.getElementById('user-input2')as HTMLInputElement).value;
    const value2 = Number(userinput2);

    const Valsum = value1 + value2;

    this.navCtrl.navigateForward(['/page2',{userinput1, userinput2, Valsum}]);

    
  }

  ngOnInit() {
  }

}
