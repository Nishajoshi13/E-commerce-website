import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  myForm=new FormGroup({
    'name': new FormControl(null, Validators.required),
    // 'movies': new FormControl([], [Validators.required]),
    'email': new FormControl(null, Validators.required),
    'contactNo': new FormControl(null, Validators.required),
    'message': new FormControl(null),
  });
}
