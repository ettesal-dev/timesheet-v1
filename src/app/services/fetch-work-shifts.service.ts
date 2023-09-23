import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchWorkShiftsService {
  private WORKSHIFT_API_URL = 'https://editor.swagger.io/workShifts';

  constructor(private http: HttpClient) {}

  //GET method
  getWorkShifts(): Observable<any[]> {
    return this.http.get(this.WORKSHIFT_API_URL, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.status);
          throw 'User not found or no logs available for this user.';
        } else {
          console.error(
            'Error fetching work shifts. Status code:',
            response.status
          );
          throw 'Failed to fetch work shifts. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to fetch work shifts. Please try again later.'
        );
      })
    );
  }

  //DELETE method
  deleteWorkShift(shiftId: string): Observable<any> {
    const url = `${this.WORKSHIFT_API_URL}?shift_id=${shiftId}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 204) {
          return;
        } else if (response.status === 422) {
          console.error('Unprocessable Content:', response.statusText);
          throw 'Unprocessable Content.';
        } else {
          console.error(
            'Error deleting work shift. Status code:',
            response.status
          );
          throw 'Failed to delete work shift. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to delete work shift. Please try again later.'
        );
      })
    );
  }

  //POST type1
  createWorkShiftType1(workShiftData: any): Observable<any> {
    const url = `${this.WORKSHIFT_API_URL}/type1`;
    return this.http.post(url, workShiftData, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 201) {
          return;
        } else if (response.status === 404) {
          console.error('Not Found:', response.statusText);
          throw 'Not Found';
        } else if (response.status === 422) {
          console.error('Unprocessable Content:', response.statusText);
          throw 'Unprocessable Content.';
        } else {
          console.error(
            'Error creating work shift type1. Status code:',
            response.status
          );
          throw 'Failed to create work shift type1. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to create work shift type1. Please try again later.'
        );
      })
    );
  }

  //PATCH type1
  updateWorkShiftType1(
    shiftId: string,
    start: string,
    end: string,
    flexTime: string,
    permitTime: string,
    days: string[]
  ): Observable<any> {
    const url = `${this.WORKSHIFT_API_URL}/type1?shift_id=${shiftId}&start=${start}&end=${end}&flex_time=${flexTime}&permit_time=${permitTime}&days=${days}`;

    return this.http.patch(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 422) {
          console.error('Unprocessable Content:', response.statusText);
          throw 'Unprocessable Content.';
        } else {
          console.error(
            'Error updating work shift type1. Status code:',
            response.status
          );
          throw 'Failed to update work shift type1. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to update work shift type1. Please try again later.'
        );
      })
    );
  }

  //POST type2
  createWorkShiftType2(workShiftData: any): Observable<any> {
    const url = `${this.WORKSHIFT_API_URL}/type2`;
    return this.http.post(url, workShiftData, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 201) {
          return;
        } else if (response.status === 422) {
          console.error('Unprocessable Content:', response.statusText);
          throw 'Unprocessable Content.';
        } else {
          console.error(
            'Error creating work shift type1. Status code:',
            response.status
          );
          throw 'Failed to create work shift type1. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to create work shift type1. Please try again later.'
        );
      })
    );
  }

  //PATCH type2
  updateWorkShiftType2(
    shiftId: string,
    start: string,
    end: string,
    flexTime: string,
    permitTime: string,
    date: string
  ): Observable<any> {
    const url = `${this.WORKSHIFT_API_URL}/type2?shift_id=${shiftId}&start=${start}&end=${end}&flex_time=${flexTime}&permit_time=${permitTime}&date=${date}`;

    return this.http.patch(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 422) {
          console.error('Unprocessable Content:', response.statusText);
          throw 'Unprocessable Content.';
        } else {
          console.error(
            'Error updating work shift type1. Status code:',
            response.status
          );
          throw 'Failed to update work shift type1. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to update work shift type1. Please try again later.'
        );
      })
    );
  }
}
