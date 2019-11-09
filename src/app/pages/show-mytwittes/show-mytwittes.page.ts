import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-mytwittes',
  templateUrl: './show-mytwittes.page.html',
  styleUrls: ['./show-mytwittes.page.scss'],
})
export class ShowMytwittesPage implements OnInit {
  token
  constructor() { }

  ngOnInit() {
    this.token.localStorage.getItem('token')
  }

}
