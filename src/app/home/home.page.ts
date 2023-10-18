import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: any ;
  password: any;
  users:any;


  constructor(
    private router: Router,
    public toastController: ToastController,
    private UserService:UserService
  ) {}

  login() {
    // Check if the entered email and password match any user in the 'users' array
    const foundUser = this.users.find((user: any) => user.email === this.email && user.password === this.password);

    if (foundUser) {
      // Navigate to another page upon successful login (e.g., '/dashboard')
      this.router.navigate(['/profile']);
      localStorage.setItem('username', foundUser.firstname+" "+foundUser.lastname);
    } else {
      console.log('Invalid email or password');
    }
  }


  getdata(){
    this.users = [];
    this.UserService.getAllUsers().subscribe({
      next: (response: {[key: string]: any}) => {
        for (const key in response) {
          this.users.push({ id: key, ...response[key] });
        }
        console.log(this.users);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }




  ngOnInit() {
    this.getdata();
  }
}
