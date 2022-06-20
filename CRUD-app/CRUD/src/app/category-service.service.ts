import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './models/category';

@Injectable({providedIn: 'root'})
export class CategoryServiceService {

  private categoryurl: string = 'http://localhost:8080/api/v1/categories';

  constructor(private http: HttpClient) {}

  public getAllCategories(): Observable<any> {
    return this.http.get(this.categoryurl)
  }

  public createCategory(data: Category): Observable<any> {
    return this.http.post(this.categoryurl, data);
  }

  public deleteCategory(id: number): Observable<any> {
    return this.http.delete(this.categoryurl+'/'+id)
  }

  public updateCategory(id: number, data: Category): Observable<any> {
    return this.http.patch(this.categoryurl, data);
  }

}
