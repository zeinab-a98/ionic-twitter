import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-show-all-twitte',
  templateUrl: './show-all-twitte.page.html',
  styleUrls: ['./show-all-twitte.page.scss'],
})
export class ShowAllTwittePage implements OnInit {
  resposeData: any;
  twitts: any;
  userData: any;
  isLoading: boolean;
  filterObj: any;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public restService: RestService,
    public activatedRoute: ActivatedRoute,
    public toastCtrl: ToastController) {
    
   }
  async ionViewWillEnter() {
    await this.getTwitts();
  }
  async getTwitts() {
    this.present();
    this.restService.postDataLara(this.userData, "").then(async (result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.total) {
        if (this.resposeData.data) {
          this.twitts = this.resposeData.data;
        }
      }
      else if (this.resposeData.total == 0) {
        this.presentToast(" نتیجه ای نداشت هیچ مسیری با فیلتر فوق نداشتیم");
      }
      else {
        this.presentToast(" انجام نشد اشکال از سرور است با مدیر شبکه تماس بگیرید");
      }
      this.dismiss();
    }, (err) => {
      //Connection failed message
      this.dismiss();
    });
  }
  
  async present() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed')).catch(() => { });
  }
  async presentToast(msg: string, time = 2000) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: time,
      position: "top"
    });
    await toast.present();
  }
Collapse



  ngOnInit() {
  }

}
