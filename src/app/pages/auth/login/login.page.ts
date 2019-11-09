import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController, LoadingController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { RestService } from '../../../rest.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData: any;
  resposeData: any;
  isLoading: boolean;
  email
  password

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    public loadingCtrl: LoadingController,
    public restService: RestService,
    public activatedRoute: ActivatedRoute,
    public toastCtrl: ToastController
    ,private router: Router
  ) { }
  ngOnInit() {
  }
  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }
  // On Register button tap, dismiss login modal and open register modal
  async registerModal() {
    this.dismissLogin();
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }




  async laravelLogin() {
    this.present();
        console.log("login");

    let userD={
      "email": this.email,
      
      "password": this.password
    }
    this.restService.postDataLara(userD, environment.laravel.login).then(async (result) => {
      this.resposeData = result;
      console.log(this.resposeData);
      if (this.resposeData.length) {
        if (this.resposeData) {
          //????
          //save token
          localStorage.setItem('token',this.resposeData.token)
          this.router.navigate(['/showmytwittes']);
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

}