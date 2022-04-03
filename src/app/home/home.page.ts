import { Component, OnInit } from '@angular/core';
import { Bean } from '../shared/bean';
import { BeanService } from './../shared/bean.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  beans: any = [];

  constructor(private beanService: BeanService) {}

  ngOnInit() { }

  ionViewDidEnter() {
    this.beanService.getBeanList().subscribe((res) => {
      console.log(res);
      this.beans = res;
    });
  }

  deleteBean(bean: Bean, i: number) {
    if (window.confirm('Do you want to delete bean?')) {
      this.beanService.deleteBean(bean._id)
        .subscribe(() => {
          this.beans.splice(i, 1);
          console.log('nuked');
        });
    }
  }
}
