import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchHolidayService {
  private HOLIDAYS_API_URL = 'your_api_url';
  constructor(private http: HttpClient) {}

  //GET method
  getHolidays(
    startDate: string,
    endDate: string,
    specificDate: string
  ): Observable<any[]> {
    const url = `${this.HOLIDAYS_API_URL}?start=${startDate}&end=${endDate}&specific_date=${specificDate}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'Events not found.';
        } else if (response.status === 422) {
          console.error('Unprocessable Content:', response.statusText);
          throw 'Unprocessable Content.';
        } else {
          const error = {
            statusCode: response.status,
            message: 'Failed to fetch holidays.',
          };
          throw error;
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(error);
      })
    );
  }

  //DELETE method
  deleteHoliday(date: string[]): Observable<any> {
    const url = `${this.HOLIDAYS_API_URL}?date=${date}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 204) {
          return;
        } else {
          const error = {
            statusCode: response.status,
            message: 'Failed to fetch holidays.',
          };
          throw error;
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(error);
      })
    );
  }

  //POST method
  createHoliday(newHoliday: any): Observable<any> {
    const url = this.HOLIDAYS_API_URL;
    return this.http.post(url, newHoliday, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 201) {
          return;
        } else if (response.status === 422) {
          console.error('Unprocessable Content:', response.statusText);
          throw 'Unprocessable Content.';
        } else {
          const error = {
            statusCode: response.status,
            message: 'Failed to fetch holidays.',
          };
          throw error;
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(error);
      })
    );
  }

  //PUT method
  updateHoliday(
    holidayDate: string,
    newDate: string,
    newName: string
  ): Observable<any[]> {
    // Create an HttpParams object to set query parameters
    let params = new HttpParams()
      .set('holiday_date', holidayDate)
      .set('new_date', newDate || '')
      .set('new_name', newName || '');

    // Make the PUT request with the specified parameters
    return (
      this.http
        //the should be and data object, but instead of object we have params?!
        .put(this.HOLIDAYS_API_URL, null, { params, observe: 'response' })
        .pipe(
          map((response: HttpResponse<any>) => {
            if (response.status === 200) {
              return response.body;
            } else if (response.status === 422) {
              console.error('Unprocessable Content:', response.statusText);
              throw 'Unprocessable Content.';
            } else {
              const error = {
                statusCode: response.status,
                message: 'Failed to update holiday.',
              };
              throw error;
            }
          }),
          catchError((error) => {
            console.error('HTTP request error:', error);
            return throwError(error);
          })
        )
    );
  }

  //PATCH method
  //this is same as PUT method
}
