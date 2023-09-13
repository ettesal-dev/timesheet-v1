import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchEventsService {
  private EVENT_API_URL = 'https://editor.swagger.io/events';
  private USEREVENT_API_URL = 'https://editor.swagger.io/users/events';

  constructor(private http: HttpClient) {}

  //GET method for events
  getEvents(): Observable<any> {
    return this.http.get(this.EVENT_API_URL, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'Events not found.';
        } else {
          console.error(
            'Error retrieving events. Status code:',
            response.status
          );
          throw 'Failed to retrieve events. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to retrieve events. Please try again later.');
      })
    );
  }

  //DELETE method for events
  deleteEvent(eventId: string): Observable<any> {
    const url = `${this.EVENT_API_URL}?event_id=${eventId}`;
    return this.http.delete(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return;
        } else if (response.status === 405) {
          console.error('Not Found Error:', response.statusText);
          throw 'Event not found for the specified ID.';
        } else if (response.status === 422) {
        } else {
          console.error('Error deleting event. Status code:', response.status);
          throw 'Failed to delete event. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to delete event. Please try again later.');
      })
    );
  }

  //POST method for events
  createEvent(eventData: any): Observable<any> {
    return this.http
      .post(this.EVENT_API_URL, eventData, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return response.body;
          } else if (response.status === 404) {
            console.error('Not Found:', response.status);
            throw 'Not Found.';
          } else if (response.status === 422) {
            console.error('Unprocessable Content:', response.status);
            throw 'Unprocessable Content.';
          } else {
            console.error(
              'Error creating event. Status code:',
              response.status
            );
            throw 'Failed to create event. Please try again later.';
          }
        }),
        catchError((error) => {
          console.error('HTTP request error:', error);
          return throwError('Failed to create event. Please try again later.');
        })
      );
  }

  //PATCH method for events
  updateEvent(
    eventId: string,
    date: string,
    start: string,
    end: string,
    eventData: string[]
  ): Observable<any> {
    const url = `${this.EVENT_API_URL}?event_id=${eventId}&date=${date}&start=${start}&end=${end}`;
    return this.http.patch(url, eventData, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 405) {
          console.error('Method Not Allowed:', response.statusText);
          throw 'Method Not Allowed.';
        } else if (response.status === 422) {
          console.error('Unprocessable Content:', response.statusText);
          throw 'Unprocessable Content.';
        } else {
          console.error('Error updating event. Status code:', response.status);
          throw 'Failed to update event. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError('Failed to update event. Please try again later.');
      })
    );
  }

  //GET method for users events
  getUserEvents(userId: string): Observable<any> {
    const url = `${this.USEREVENT_API_URL}?user_id=${userId}`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map((response: HttpResponse<any>) => {
        if (response.status === 200) {
          return response.body;
        } else if (response.status === 404) {
          console.error('Not Found Error:', response.statusText);
          throw 'User events not found.';
        } else if (response.status === 422) {
          console.error('Unprocessable Entity Error:', response.statusText);
          throw 'Invalid data for retrieving user events.';
        } else {
          console.error(
            'Error retrieving user events. Status code:',
            response.status
          );
          throw 'Failed to retrieve user events. Please try again later.';
        }
      }),
      catchError((error) => {
        console.error('HTTP request error:', error);
        return throwError(
          'Failed to retrieve user events. Please try again later.'
        );
      })
    );
  }
}
