import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchCalculateService {
  private DAILY_API_URL = 'https://editor.swagger.io/users/daily'
  private OVERTIME_API_URL = 'https://editor.swagger.io/users/overtime'
  private UNDERTIME_API_URL = 'https://editor.swagger.io/users/undertime'

  constructor(private http: HttpClient) { }

  //GET method for daily
  getUserDailyCalc(userId: number, startDate: string, endDate: string): Observable<any> {
    const url = `${this.DAILY_API_URL}?user_id=${userId}&start=${startDate}&end=${endDate}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        // Check the HTTP status code
        if (response.status === 200) {
          // Successful response, return data
          return response.body;
        } else if (response.status === 400) {
          // Handle 400 Bad Request status code
          console.error('Bad Request Error:', response.statusText);
          throw 'Bad Request: Invalid input.';
        } else if (response.status === 404) {
          // Handle 404 Not Found status code
          console.error('Not Found Error:', response.statusText);
          throw 'User not found or no daily data available for this user and date range.';
        } else {
          // Handle other status codes as needed
          console.error('Error fetching user daily data. Status code:', response.status);
          throw 'Failed to fetch user daily data. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to fetch user daily data. Please try again later.');
      })
    );
  }

  //GET method for overtime
  getUserOvertimeCalc(userId: number, startDate: string, endDate: string): Observable<any> {
    const url = `${this.OVERTIME_API_URL}?user_id=${userId}&start=${startDate}&end=${endDate}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        // Check the HTTP status code
        if (response.status === 200) {
          // Successful response, return data
          return response.body;
        } else if (response.status === 400) {
          // Handle 400 Bad Request status code
          console.error('Bad Request Error:', response.statusText);
          throw 'Bad Request: Invalid input.';
        } else if (response.status === 404) {
          // Handle 404 Not Found status code
          console.error('Not Found Error:', response.statusText);
          throw 'User not found or no overtime data available for this user and date range.';
        } else {
          // Handle other status codes as needed
          console.error('Error fetching user overtime data. Status code:', response.status);
          throw 'Failed to fetch user overtime data. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to fetch user overtime data. Please try again later.');
      })
    );
  }

  //GET method for undertime
  getUserUndertimeData(userId: number, startDate: string, endDate: string): Observable<any> {
    const url = `${this.UNDERTIME_API_URL}?user_id=${userId}&start=${startDate}&end=${endDate}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        // Check the HTTP status code
        if (response.status === 200) {
          // Successful response, return data
          return response.body;
        } else if (response.status === 400) {
          // Handle 400 Bad Request status code
          console.error('Bad Request Error:', response.statusText);
          throw 'Bad Request: Invalid input.';
        } else if (response.status === 404) {
          // Handle 404 Not Found status code
          console.error('Not Found Error:', response.statusText);
          throw 'User not found or no undertime data available for this user and date range.';
        } else {
          // Handle other status codes as needed
          console.error('Error fetching user undertime data. Status code:', response.status);
          throw 'Failed to fetch user undertime data. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to fetch user undertime data. Please try again later.');
      })
    );
  }
}
