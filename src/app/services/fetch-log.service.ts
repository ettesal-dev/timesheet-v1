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
  private OVERTIME_API_URL = 'https://editor.swagger.io/users/logs/overtime';

  constructor(private http: HttpClient) {}

  //GET method
  getUserLogs(
    userId: number,
    start: string,
    end: string,
    specificDate: string
  ): Observable<any> {
    const url = `${this.USER_API_URL}?user_id=${userId}&start=${start}&end=${end}&specific_date=${specificDate}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error.';
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
  deleteUserLog(logID: number): Observable<any> {
    const url = `${this.USER_API_URL}?log_date=${logID}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 204) {
          return;
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error.';
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
    logId: number,
    date: string,
    time: string,
    comment: string | null,
    isOvertime: boolean,
    approvedOvertime: string
  ): Observable<any> {
    const commentValue = comment === null ? '' : comment;
    const url = `${this.USER_API_URL}?log_id=${logId}&date=${date}&time=${time}&comment=${commentValue}&is_overtime=${isOvertime}&approved_overtime=${approvedOvertime}`;
    return this.http.put(url, null, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error.';
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
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error.';
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

  //GET method for logs entrance
  getEntranceLogs(
    userId: string,
    start: string,
    end: string,
    specificDate: string
  ): Observable<any> {
    const url = `${this.ENTRANCE_API_URL}?user_id=${userId}&start=${start}&end=${end}&specific_date=${specificDate}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'User logs not found.';
        } else if (response.status === 422) {
          console.error('Unprocessable Entity Error:', response.statusText);
          throw 'Invalid data for retrieving user logs.';
        } else {
          console.error(
            'Error retrieving user logs. Status code:',
            response.status
          );
          throw 'Failed to retrieve user logs. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to retrieve user logs. Please try again later.'
        );
      })
    );
  }

  //POST method for logs exit
  createExitLog(userId: number, exitLogData: any): Observable<any> {
    const url = `${this.EXIT_API_URL}?user_id=${userId}`;
    return this.http.post(url, exitLogData, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 201) {
          return;
        } else if (response.status === 422) {
          console.error('Unprocessable Content Error:', response.statusText);
          throw 'Unprocessable Content Error.';
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

  //GET method for logs exit
  getExitLogs(
    userId: string,
    start: string,
    end: string,
    specificDate: string
  ): Observable<any> {
    const url = `${this.EXIT_API_URL}?user_id=${userId}&start=${start}&end=${end}&specific_date=${specificDate}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 422) {
          console.error('Unprocessable Entity Error:', response.statusText);
          throw 'Invalid data for retrieving user logs.';
        } else {
          console.error(
            'Error retrieving user logs. Status code:',
            response.status
          );
          throw 'Failed to retrieve user logs. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to retrieve user logs. Please try again later.'
        );
      })
    );
  }

  //GET method for logs overtime
  getOvertimeLogs(
    userId: string,
    start: string,
    end: string,
    approvedOvertime: boolean,
    specificDate: string
  ): Observable<any> {
    const url = `${this.OVERTIME_API_URL}?user_id=${userId}&start=${start}&end=${end}&approved_overtime=${approvedOvertime}&specific_date=${specificDate}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'User overtime logs not found.';
        } else if (response.status === 422) {
          console.error('Unprocessable Entity Error:', response.statusText);
          throw 'Invalid data for retrieving user overtime logs.';
        } else {
          console.error(
            'Error retrieving user overtime logs. Status code:',
            response.status
          );
          throw 'Failed to retrieve user overtime logs. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to retrieve user overtime logs. Please try again later.'
        );
      })
    );
  }
}
