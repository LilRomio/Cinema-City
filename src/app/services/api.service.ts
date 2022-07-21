import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BookingComponent } from '../sharepage/pages/booking/booking.component';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postBooking(data: any) {
    return this.http.post<any>('http://localhost:3000/bookings', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getBooking() {
    return this.http.get<any>('http://localhost:3000/bookings').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  postMovie(data: any) {
    return this.http.post<any>('http://localhost:3004/movies/', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getMovie() {
    return this.http.get<any>('http://localhost:3004/movies').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateMovie(data: any, id: number) {
    return this.http.put<any>('http://localhost:3004/movies/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteMovie(id: number) {
    return this.http.delete<any>('http://localhost:3004/movies/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getUsers() {
    return this.http.get<any>('http://localhost:3004/signupUsers/').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteUser(id: number) {
    return this.http.delete<any>('http://localhost:3004/signupUsers/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
