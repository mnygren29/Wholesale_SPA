import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  //@Input() valuesFromHome: any;
  //with output, it always emits events, so we need a new instance of eventemitter
  //so always 4 parts when adding an output property
  //1. Assign new output propery to eventemitter
  
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService:AuthService,private alertify:AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('regitration successful');
    }, error => {

      console.log(error);
    }
    );
  }


  cancel() {
    //2. specify what we want to emit to parent component
    this.cancelRegister.emit(false);
    //3. next, go to the parent component and add the reference to this in the html.
    //4. finally go to the component of the parent 
    console.log('canceled');
  }

}
