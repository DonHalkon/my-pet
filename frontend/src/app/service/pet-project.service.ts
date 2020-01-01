import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetProjectService {

  constructor(private http: HttpClient) {}


  get(petProjectName: string) {
    return this.http.get<[PetProject]>('pet-project/' + petProjectName)
      .pipe(
        response => {
          return response;
        },
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }

}

export interface PetProject {
  name: string;
  description: string;
  shortDescription: string;
  task: string;
  tests: [string];
}
