import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchLogService {
  private USER_API_URL = 'https://editor.swagger.io/users/logs';
  private ENTRANCE_API_URL = 'https://editor.swagger.io/users/logs/entrance';
  private EXIT_API_URL = 'https://editor.swagger.io/users/logs/exit';

  constructor(private http: HttpClient) {}

  //GET method
  getUserLogs(userId: number): Observable<any> {
    const url = `${this.USER_API_URL}?user_id=${userId}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 400) {
          console.error('Bad Request Error:', response.statusText);
          throw 'Bad Request: Invalid input.';
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'User not found or no logs available for this user.';
        } else {
          console.error(
            'Error fetching user logs. Status code:',
            response.status
          );
          throw 'Failed to fetch user logs. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to fetch user logs. Please try again later.');
      })
    );
  }

  //DELETE method
  deleteUserLog(userId: number, logDate: number): Observable<any> {
    const url = `${this.USER_API_URL}?user_id=${userId}&log_date=${logDate}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 204) {
          return;
        } else if (response.status === 400) {
          console.error('Bad Request Error:', response.statusText);
          throw 'Bad Request: Invalid input.';
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'Log not found for this user and date.';
        } else {
          console.error(
            'Error deleting user log. Status code:',
            response.status
          );
          throw 'Failed to delete user log. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to delete user log. Please try again later.');
      })
    );
  }

  //PUT method
  updateUserLog(
    userId: number,
    logId: number,
    date: string,
    time: string,
    comment: string | null,
    isApproved: boolean
  ): Observable<any> {
    const commentValue = comment === null ? '' : comment;
    const url = `${this.USER_API_URL}?user_id=${userId}&log_id=${logId}&date=${date}&time=${time}&comment=${commentValue}&is_approved=${isApproved}`;
    return this.http.put(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 204) {
          return;
        } else if (response.status === 400) {
          console.error('Bad Request Error:', response.statusText);
          throw 'Bad Request: Invalid input.';
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'Log not found for this user and details.';
        } else {
          console.error('Error updating log. Status code:', response.status);
          throw 'Failed to update log. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to update log. Please try again later.');
      })
    );
  }

  //PATCH method
  //it is same as PUT method

  //POST method for logs entrance
  createEntranceLog(userId: number, entranceLogData: any): Observable<any> {
    const url = `${this.ENTRANCE_API_URL}?user_id=${userId}`;
    return this.http.post(url, entranceLogData, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 201) {
          return;
        } else if (response.status === 400) {
          console.error('Bad Request Error:', response.statusText);
          throw 'Bad Request: Invalid input.';
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'User not found or unable to create an entrance log.';
        } else {
          console.error(
            'Error creating entrance log. Status code:',
            response.status
          );
          throw 'Failed to create entrance log. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to create entrance log. Please try again later.'
        );
      })
    );
  }

  //POST method for logs exit
  createExitLog(userId: number): Observable<any> {
    const url = `${this.EXIT_API_URL}?user_id=${userId}`;
    return this.http.post(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 201) {
          return;
        } else if (response.status === 400) {
          console.error('Bad Request Error:', response.statusText);
          throw 'Bad Request: Invalid input.';
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'User not found or unable to create an exit log.';
        } else {
          console.error(
            'Error creating exit log. Status code:',
            response.status
          );
          throw 'Failed to create exit log. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to create exit log. Please try again later.');
      })
    );
  }
}
