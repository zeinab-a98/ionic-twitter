import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { environment } from '../../../../environments/environment';
import { RestService } from '../../../rest.service';
import { ActivatedRoute } from '@angular/router';
import { LoginPage } from '../login/login.page';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  resposeData: any;
  twitts: any;
  userData: any;
  isLoading: boolean;
  filterObj: any;
  email
  password
  name
  password_confirmation
  router: any;

  constructor(private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    public loadingCtrl: LoadingController,
    public restService: RestService,
    public activatedRoute: ActivatedRoute,
    public toastCtrl: ToastController) { }

  ngOnInit() {
  }


   // Dismiss Register Modal
   dismissRegister() {
    this.modalController.dismiss();
  }
  // On Login button tap, dismiss Register modal and open login Modal
  async loginModal() {
    this.dismissRegister();
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }

  async laravelregister(){
    this.present();

    let userD={
      "name": this.name,
      "email": this.email,
      "password": this.password,
      "password_confirmation": this.password_confirmation
      
  }

    this.restService.postDataLara(userD, environment.laravel.register).then(async (result) => {
      this.resposeData = result;
      console.log('register');
      console.log(this.resposeData);
      if (this.resposeData.length) {
        console.log('register2');
        if (this.resposeData.code==200) {
          //????
          //save token
          console.log('register3');
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
 
  // register(form: NgForm) {
  //   this.authService.register(form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(
  //     data => {
  //       this.authService.login(form.value.email, form.value.password).subscribe(
  //         data => {
  //         },
  //         error => {
  //           console.log(error);
  //         },
  //         () => {
  //           this.dismissRegister();
  //           this.navCtrl.navigateRoot('/dashboard');
  //         }
  //       );
  //       this.alertService.presentToast(data['message']);
  //     },
  //     error => {
  //       console.log(error);
  //     },
  //     () => {
        
  //     }
  //   );
  // }

}
