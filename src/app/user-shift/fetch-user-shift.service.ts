import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchUserShiftService {
  visible:boolean = false
  //get user shift id as an input ID for PUT method
  shiftId:string | undefined = ''
  userId:string | undefined = ''

  toggleLiveDemo(userId?:string,id?:string) {
    this.visible = !this.visible;
    this.shiftId = id
    this.userId = userId
    //console.log(this.shiftId)
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  private USERSHIFT_API_URL = 'https://editor.swagger.io/userShifts';

  constructor(private http: HttpClient) {}

  //GET
  getUserShifts(userId: number, startDate:string, endDate:string): Observable<any> {
    const url = `${this.USERSHIFT_API_URL}?user_id=${userId}&start=${startDate}&end=${endDate}`;
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
  createUserShift(userId: string, shiftId: string, activation:string, expiration:string): Observable<any> {
    const url = `${this.USERSHIFT_API_URL}?user_id=${userId}&shift_id=${shiftId}&activation=${activation}&expiration=${expiration}`;
    return this.http.post(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 201) {
          return;
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

  //PATCH
  updateShift(
    userId: string,
    shiftId: string,
    isExpired: boolean,
    activation: string,
    expiration: string
  ): Observable<any> {
    const url = `${this.USERSHIFT_API_URL}?user_id=${userId}&shift_id=${shiftId}&is_expired=${isExpired}&activation=${activation}&expiration=${expiration}`;
    return this.http.patch(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        // Check the HTTP status code
        if (response.status === 200) {
          // Successful response, no content
          return;
        } else if (response.status === 422) {
          // Handle 422 Unprocessable Entity status code
          console.error('Unprocessable Entity Error:', response.statusText);
          throw 'Invalid data for updating user shift.';
        } else {
          // Handle other status codes as needed
          console.error('Error updating user shift. Status code:', response.status);
          throw 'Failed to update user shift. Please try again later.';
        }
      }),
      catchError((error) => {
        // Handle HTTP request errors
        console.error('HTTP request error:', error);
        return throwError('Failed to update user shift. Please try again later.');
      })
    );
  }
}
