import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchShiftService {
  private SHIFT_API_URL = 'https://editor.swagger.io/shifts';
  private USER_API_URL = 'https://editor.swagger.io/users/shifts';
  private TYPE1_API_URL = 'https://editor.swagger.io/shifts/type1';
  private TYPE2_API_URL = 'https://editor.swagger.io/shifts/type2';

  constructor(private http: HttpClient) {}

  //GET method for shift
  getShifts(): Observable<any> {
    return this.http.get(this.SHIFT_API_URL, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 400) {
          console.error('Not Found Error:', response.statusText);
          throw 'Bad Request: Invalid input.';
        } else {
          console.error('Error fetching shifts. Status code:', response.status);
          throw 'Failed to fetch shifts. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to fetch shifts. Please try again later.');
      })
    );
  }

  //DELETE method for shifts
  deleteShift(shiftId: number): Observable<any> {
    const url = `${this.SHIFT_API_URL}?shift_id=${shiftId}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 204) {
          return;
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error';
        } else if (response.status === 405) {
          console.error('Method Not Allowed Response Status:', response.statusText);
          throw 'Method Not Allowed Response Status.';
        } else {
          console.error('Error deleting shift. Status code:', response.status);
          throw 'Failed to delete shift. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to delete shift. Please try again later.');
      })
    );
  }

  //GET method for users shifts
  getUserShift(userId: number): Observable<any> {
    const url = `${this.USER_API_URL}?user_id=${userId}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error.';
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'User not found or no shifts available for this user.';
        } else {
          console.error('Error fetching shifts. Status code:', response.status);
          throw 'Failed to fetch shifts. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to fetch shifts. Please try again later.');
      })
    );
  }

  //DELETE method for users shifts
  deleteUserShift(userId: number, shiftId: number): Observable<any> {
    const url = `${this.USER_API_URL}?user_id=${userId}&shift_id=${shiftId}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error.';
        } else {
          console.error('Error deleting shift. Status code:', response.status);
          throw 'Failed to delete shift. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to delete shift. Please try again later.');
      })
    );
  }

  //we dont have any data for middle table(mant-to-many relationship)
  //we establish the association between the user and the shift
  //POST method for users shifts
  createUserShift(userId: number, shiftId: number): Observable<any> {
    const url = `${this.USER_API_URL}?user_id=${userId}&shift_id=${shiftId}`;
    return this.http.post(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error.';
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'User or shift not found.';
        } else {
          console.error('Error adding shift. Status code:', response.status);
          throw 'Failed to add shift. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to add shift. Please try again later.');
      })
    );
  }

  //POST method for tpye1
  createShiftType1(newShiftType1: any): Observable<any> {
    return this.http
      .post(this.TYPE1_API_URL, newShiftType1, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return response.body;
          } else if (response.status === 422) {
            console.error('Unprocessable Content Error:', response.statusText);
            throw 'Unprocessable Content Error.';
          } else {
            console.error(
              'Error creating shift. Status code:',
              response.status
            );
            throw 'Failed to create shift. Please try again later.';
          }
        }),
        catchError((error) => {
          console.error('HTTP request error:', error);
          return throwError('Failed to create shift. Please try again later.');
        })
      );
  }

  //PATCH method for type1
  updateShiftType1(
    shiftId: number,
    start: string,
    end: string,
    flexTime: string,
    permitTime: string,
    days: number
  ): Observable<any> {
    const url = `${this.TYPE1_API_URL}?shift_id=${shiftId}&start=${start}&end=${end}&flex_time=${flexTime}&permit_time=${permitTime}&days=${days}`;
    return this.http.patch(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error.';
        } else if (response.status === 405) {
          console.error('Method Not Allowed Response Status:', response.statusText);
          throw 'Method Not Allowed Response Status.';
        } else {
          console.error('Error updating shift. Status code:', response.status);
          throw 'Failed to update shift. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to update shift. Please try again later.');
      })
    );
  }

  //POST method for type2
  createShiftType2(newShiftType2: any): Observable<any> {
    return this.http
      .post(this.TYPE2_API_URL, newShiftType2, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return response.body;
          } else if (response.status === 422) {
            console.error('Unprocessable Content Error:', response.statusText);
            throw 'Unprocessable Content Error.';
          } else {
            console.error(
              'Error creating shift. Status code:',
              response.status
            );
            throw 'Failed to create shift. Please try again later.';
          }
        }),
        catchError((error) => {
          console.error('HTTP request error:', error);
          return throwError('Failed to create shift. Please try again later.');
        })
      );
  }

  //PATCH method for type2
  updateShiftType2(
    shiftId: number,
    start: string,
    end: string,
    flexTime: string,
    permitTime: string,
    date: string
  ): Observable<any> {
    const url = `${this.TYPE2_API_URL}?shift_id=${shiftId}&start=${start}&end=${end}&flex_time=${flexTime}&permit_time=${permitTime}&date=${date}`;
    return this.http.patch(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error.';
        } else if (response.status === 405) {
          console.error('Method Not Allowed Response Status:', response.statusText);
          throw 'Method Not Allowed Response Status.';
        } else {
          console.error('Error updating shift. Status code:', response.status);
          throw 'Failed to update shift. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to update shift. Please try again later.');
      })
    );
  }
}
