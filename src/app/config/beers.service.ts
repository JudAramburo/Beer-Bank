import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of'

import { Beer } from './beer';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class BeersService {

    private beersUrl: string = 'https://api.punkapi.com/v2/beers';

    private perPage: string = "&per_page=6";

    constructor(private http: HttpClient) { }

    getBeers(name: string, page: number): Observable<Beer[]> {
        return this.http.get<Beer[]>(this.beersUrl + "?beer_name=" + name + "&page=" + page + this.perPage)
            .pipe(
                catchError(this.handleError('getUsers', []))
            );
    }

    getPage(page: number): Observable<Beer[]> {
        return this.http.get<Beer[]>(this.beersUrl + "?page=" + page + this.perPage)
            .pipe(
                catchError(this.handleError('getUsers', []))
            );
    }

    getFavourites(sFavs: string, page: number): Observable<Beer[]> {
        return this.http.get<Beer[]>(this.beersUrl + "?ids=" + sFavs + "&page=" + page + this.perPage)
            .pipe(
                catchError(this.handleError('getUsers', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log('UserService: ' + message);
    }

}