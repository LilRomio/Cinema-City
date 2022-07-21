import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthService } from 'src/app/services/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { MovieModel } from './admin.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingComponent } from 'src/app/sharepage/pages/booking/booking.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  formValue!: FormGroup;
  movieModelObj: MovieModel = new MovieModel();

  showAdd!: boolean;
  showUpdate!: boolean;
  usersData!: any;
  moviesData!: any;
  bookingsData!: any;

  constructor(private auth: AuthService, private http: HttpClient, private api: ApiService, private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllMovies();
    this.getAllBookings();
    this.formValue = this.formbuilder.group({
      trailer: [''],
      movie: [''],
      year: [''],
      duration: [''],
      director: [''],
      actors: [''],
      cinemas: [''],
    });
  }

  clickAddMovie() {
    this.formValue.reset();
    this.movieModelObj = new MovieModel();
    this.showAdd = true;
    this.showUpdate = false;
  }

  deleteMovie(row: any) {
    this.api.deleteMovie(row.id).subscribe((res) => {
      alert('Movie deleted');
      this.getAllMovies();
    });
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.movieModelObj.id = row.id;
    this.formValue.controls['trailer'].setValue(row.trailer);
    this.formValue.controls['movie'].setValue(row.movie);
    this.formValue.controls['year'].setValue(row.year);
    this.formValue.controls['duration'].setValue(row.duration);
    this.formValue.controls['director'].setValue(row.director);
    this.formValue.controls['actors'].setValue(row.actors);
    this.formValue.controls['cinemas'].setValue(row.cinemas);
  }

  postMovieDetails() {
    this.movieModelObj.trailer = this.formValue.value.trailer;
    this.movieModelObj.movie = this.formValue.value.movie;
    this.movieModelObj.year = this.formValue.value.year;
    this.movieModelObj.duration = this.formValue.value.duration;
    this.movieModelObj.director = this.formValue.value.director;
    this.movieModelObj.actors = this.formValue.value.actors;
    this.movieModelObj.cinemas = this.formValue.value.cinemas;
    this.api.postMovie(this.movieModelObj).subscribe((res) => {
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllMovies();
    });
  }
  updateMovieDetails() {
    this.movieModelObj.trailer = this.formValue.value.trailer;
    this.movieModelObj.movie = this.formValue.value.movie;
    this.movieModelObj.year = this.formValue.value.year;
    this.movieModelObj.duration = this.formValue.value.duration;
    this.movieModelObj.director = this.formValue.value.director;
    this.movieModelObj.actors = this.formValue.value.actors;
    this.movieModelObj.cinemas = this.formValue.value.cinemas;

    this.api.updateMovie(this.movieModelObj, this.movieModelObj.id).subscribe((res) => {
      alert('Movie successfull updated');
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllMovies();
    });
  }

  getAllUsers() {
    this.api.getUsers().subscribe((res) => {
      this.usersData = res;
    });
  }

  deleteUser(row: any) {
    this.api.deleteUser(row.id).subscribe(() => {
      alert('User deleted');
      this.getAllUsers();
    });
  }

  getAllMovies() {
    this.api.getMovie().subscribe((res) => {
      this.moviesData = res;
    });
  }

  getAllBookings() {
    this.api.getBooking().subscribe((res) => {
      this.bookingsData = res;
    });
  }
}
