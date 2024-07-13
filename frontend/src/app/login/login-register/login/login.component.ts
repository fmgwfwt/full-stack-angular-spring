import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Import the Router module
import { TokenStorageService } from '../../../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
      private authService: AuthService,
      private tokenStorage: TokenStorageService,
      private router: Router // Inject the Router module
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        
        if(this.tokenStorage.getUser().roles=="ROLE_ADMIN"){
          this.router.navigate(['/dashboard']);
        }
        else if(this.tokenStorage.getUser().roles=="ROLE_USER"){
          this.router.navigate(['/user-dashboard']);
        }
       
        // Adjust the route path if needed
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  goToSignUpPage():void{
  this.router.navigate(['signup'])
  }

  reloadPage(): void {
    window.location.reload();
  }
}
