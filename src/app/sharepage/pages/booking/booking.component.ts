import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/services/auth.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  formValue!: FormGroup;
  moviesData!: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,
    private api: ApiService,
    public sanitizer: DomSanitizer,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getAllMovies();

    this.formValue = this.formbuilder.group({
      movieName: [''],
      date: [''],
      tickets: [''],
      id: [''],
      userEmail: [''],
    });
  }

  clickBooking(row: any) {
    console.log(this.formValue);
    this.formValue.reset();
    this.formValue.controls['movieName'].setValue(row.movie);
  }

  getAllMovies() {
    this.api.getMovie().subscribe((res) => {
      console.log(res);
      this.moviesData = res;
    });
  }

  booked() {
    const email = this.auth.getToken();
    this.formValue.controls['id'].setValue(`${this.formValue.value.movieName}${email}${this.formValue.value.date}`);
    this.formValue.controls['userEmail'].setValue(email);
    this.http.post<any>('http://localhost:3000/bookings', this.formValue.value).subscribe({
      next: (res) => {
        alert('Booking Successufull');
        this.formValue.reset();
        this.router.navigate(['']);
      },
      error: (err) => {
        alert(err.message);
      },
    });
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
