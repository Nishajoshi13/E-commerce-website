import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  signUpUsers:any[]=[];
  signupObj:any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj :any={
    email:'',
    passWord:''
  };
  
ngOnInit(): void{
  const localData=localStorage.getItem('signUpUsers');
  if(localData!= null)
  this.signUpUsers=JSON.parse(localData);
}

  onSignUp(){
    this.signUpUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers))
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }

  onLogin(){
    debugger
    const isUserExist =this.signUpUsers.find(m => m.email == this.loginObj.email && m.passWord == this.loginObj.passWord);
    if(isUserExist != undefined){
      alert('USer Login Successfully');
    } else{
      alert('wrong Credentials');
    }
  }
}
