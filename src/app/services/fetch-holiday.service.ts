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
  getHolidays(startDate: string, endDate: string): Observable<any[]> {
    const url = `${this.HOLIDAYS_API_URL}?start=${startDate}&end=${endDate}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        // Check the HTTP status code
        if (response.status === 200) {
          return response.body;
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
  deleteHoliday(date: string): Observable<any[]> {
    const url = `${this.HOLIDAYS_API_URL}?date=${date}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        // Check the HTTP status code
        if (response.status === 200) {
          return response.body;
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
  createHoliday(newHoliday: any): Observable<any[]> {
    const url = this.HOLIDAYS_API_URL;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        // Check the HTTP status code
        if (response.status === 200) {
          return response.body;
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
    currentDate: string,
    newDate: string,
    newName: string
  ): Observable<any[]> {
    // Create an HttpParams object to set query parameters
    let params = new HttpParams()
      .set('current_date', currentDate)
      .set('new_date', newDate)
      .set('new_name', newName);

    // Make the PUT request with the specified parameters
    return this.http
      .put(this.HOLIDAYS_API_URL, null, { params, observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          // Check the HTTP status code
          if (response.status === 200) {
            return response.body;
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
      );
  }
}
