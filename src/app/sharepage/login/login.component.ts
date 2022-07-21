import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private http: HttpClient,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (_result) => {
          const { userType } = _result;
          if (userType === 1) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['booking']);
          }
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }

  login() {
    this.http.get<any>('http://localhost:3000/signupUsers').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
        });
        if (user) {
          console.log(user);
          this.toast.success({ detail: 'Success Message', summary: 'Login Successfully', duration: 3000 });

          this.loginForm.reset();
          this.auth.login(user);

          if (user.userType === 1) {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['booking']);
          }
        } else {
          alert('user not found');
        }
      },
      (_err) => {
        alert('Something went wrong');
      }
    );
  }
}
