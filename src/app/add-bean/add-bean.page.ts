import { Component, OnInit, NgZone } from '@angular/core';
import { BeanService } from './../shared/bean.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Bean } from '../shared/bean';
import { timeStamp } from 'console';

@Component({
  selector: 'app-add-bean',
  templateUrl: './add-bean.page.html',
  styleUrls: ['./add-bean.page.scss'],
})
export class AddBeanPage implements OnInit {
  beanForm: FormGroup;
  id: any;
  get isCreate():boolean {
    return !this.id;
  }
  constructor(
    private beanService: BeanService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private zone: NgZone
  ) {

    this.id = this.activeRoute.snapshot.paramMap.get('id') ? this.activeRoute.snapshot.paramMap.get('id') : false;

  }

  ngOnInit() {
    this.beanForm = this.fb.group([
      name: [''],
      type: ['']
    ]);
  }

  onFormSubmit() {
    if (!this.beanForm.valid) {
      return false;
    }
    if (this.isCreate) {

    this.beanService.addBean(this.beanForm.value)
    .subscribe((res) => {
     this.zone.run(() => {
       console.log(res);
       this.beanForm.reset();
       this.router.navigate(['/home']);
     })
    });
  } else {

  }
  }

}
