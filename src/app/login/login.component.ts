import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim = "your perfect banking partner"
  data = "enter account number"
  acno=""
  psw=""



  userDetails: any = {
    1000: { acno: 1000, username: "anu", password: 123, balance: 0 },
    1001: { acno: 1001, username: "vismaya", password: 123, balance: 0 },
    1002: { acno: 1002, username: "aparna", password: 123, balance: 0 },
    1003: { acno: 1003, username: "nidhin", password: 123, balance: 0 }
  }
  // login() {
  //   var acno=this.acno
  //   var psw=this.psw
  //   var userDetails=this.userDetails
    
  //   if (acno in userDetails){
  //     if(psw==userDetails[acno]["password"]){
  //       alert("you are successfully login")
  //     }
  //     else{
  //       alert("you entered wrong password")
  //     }
  //   }
  //   else{
  //     alert("The user doesn't exist")
  //   }

  //   // alert("login clicked")
  // }
  login(a:any,b:any) {
     this.acno=a.value
     this.psw=b.value

    var acno=this.acno
    var psw=this.psw
    var userDetails=this.userDetails
    
    if (acno in userDetails){
      if(psw==userDetails[acno]["password"]){
        alert("you are successfully login")
      }
      else{
        alert("you entered wrong password")
      }
    }
    else{
      alert("The user doesn't exist")
    }
  }

//   acnoChange(event: any) {
//     this.acno=event.target.value
//   }
//   pswChange(event:any){
//     this.psw=event.target.value
//     console.log(this.psw);
    
//   }
// }
}