import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiFacultyService {
  apiURL = 'https://631eb76558a1c0fe9f5630b6.mockapi.io/Faculty';
  constructor(private http: HttpClient) {}
  getAllFaculties() {
    return this.http.get(this.apiURL);
  }

  getFacultyById(id: any) {
    return this.http.get(this.apiURL + '/' + id);
  }

  deleteStudentById(id: any) {
    return this.http.delete(this.apiURL + '/' + id);
  }

  insertFaculty(form: any) {
    return this.http.post(this.apiURL, form);
  }

  updateFaculty(id: any, form: any) {
    return this.http.put(this.apiURL + '/' + id, form);
  }
}
