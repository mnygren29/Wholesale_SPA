import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { AlertifyService } from '../../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
//import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-broker-detail',
  templateUrl: './broker-detail.component.html',
  styleUrls: ['./broker-detail.component.css']
})
export class BrokerDetailComponent implements OnInit {
  user: User;
  //galleryOptions: NgxGalleryOptions[];
  //galleryImages: NgxGalleryImage[];

  constructor(private userService: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
   // this.route.data.subscribe(data => {
   //   this.user = data['user'];
   // });
    this.loadUser();
  }

  loadUser() {

    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {

      this.user = user;
    }, error => {
   //   this.alertify.error(error);
      console.log(error);
    });
    }
  }


