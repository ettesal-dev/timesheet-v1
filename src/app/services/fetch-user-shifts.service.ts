import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchUserShiftsService {
  private USERSHIFT_API_URL = 'https://editor.swagger.io/userShifts';

  constructor(private http: HttpClient) {}

  //GET
  getUserShifts(userId: number): Observable<any> {
    const url = `${this.USERSHIFT_API_URL}?user_id=${userId}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 404) {
          console.error('Not Found', response.status);
          throw 'Not Found.';
        } else if (response.status === 422) {
          console.error('Unprocessable Content:', response.status);
          throw 'Unprocessable Content.';
        } else {
          console.error(
            'Error retrieving user shifts. Status code:',
            response.status
          );
          throw 'Failed to retrieve user shifts. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to retrieve user shifts. Please try again later.'
        );
      })
    );
  }

  //DELETE
  deleteUserShift(userId: number, shiftId: number): Observable<any> {
    const url = `${this.USERSHIFT_API_URL}?user_id=${userId}&shift_id=${shiftId}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 204) {
          return;
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'User shift not found for the specified user and shift.';
        } else {
          console.error(
            'Error deleting user shift. Status code:',
            response.status
          );
          throw 'Failed to delete user shift. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to delete user shift. Please try again later.'
        );
      })
    );
  }

  //POST
  createUserShift(userId: string, shiftId: string): Observable<any> {
    const url = `${this.USERSHIFT_API_URL}?user_id=${userId}&shift_id=${shiftId}`;
    return this.http.post(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 404) {
          console.error('Not Found', response.statusText);
          throw 'Not Found.';
        } else if (response.status === 422) {
          console.error('Unprocessable Content:', response.statusText);
          throw 'Unprocessable Content.';
        } else {
          console.error(
            'Error creating user shift. Status code:',
            response.status
          );
          throw 'Failed to create user shift. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to create user shift. Please try again later.'
        );
      })
    );
  }
}
