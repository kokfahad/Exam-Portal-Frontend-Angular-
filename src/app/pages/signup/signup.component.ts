import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(
    private userService:UserService,
    private snack:MatSnackBar
    ) {}


 public user = {
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  };
  
  ngOnInit(): void {
  }

  formSubmit()
  {
    // alert('submit');
    if(this.user.username=='' || this.user.username==null)
    {
        this.snack.open("Username is required","cancel",{
          duration:5000
        });
        return;
    }

  // addUser: UserService
  this.userService.addUser(this.user).subscribe(
    (data:any) =>{
       console.log(this.user);
      //  alert("success");
      Swal.fire("Successfully Registered","User ID is : "+ data.id,"success")
    },
    (error) => {
    // alert("something went wrong");
    this.snack.open("Something went wrong","cancel",{
      duration:5000
    });
    }
    );
  }


  

}
