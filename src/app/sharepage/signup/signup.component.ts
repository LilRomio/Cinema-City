import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUp() {
    this.http.post<any>('http://localhost:3000/signupUsers', this.signupForm.value).subscribe({
      next: (res) => {
        alert('Sign Up Successufull');
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }
}
