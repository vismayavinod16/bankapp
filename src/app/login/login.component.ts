import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  
  constructor(private router:Router,private ds:DataService ){ }

  login() {
    var acno=this.acno
    var psw=this.psw

    const result=this.ds.login(acno,psw)
    if(result){
      alert("you are successfully login")
      this.router.navigateByUrl("dashboard")
    }
    else{
      alert('Invalid Username or Password')
    }
  }
    
  // login(a:any,b:any) {
  //    this.acno=a.value
  //    this.psw=b.value

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
  // }

//   acnoChange(event: any) {
//     this.acno=event.target.value
//   }
//   pswChange(event:any){
//     this.psw=event.target.value
//     console.log(this.psw);
    
//   }
// }
}