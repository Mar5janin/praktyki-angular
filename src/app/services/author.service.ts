import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDTO } from './book.service';

export interface AuthorDTO {
  id: number;
  name: string;
  nationality: string;
  books: BookDTO[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private apiUrl = 'http://localhost:8080/api/v2/author';

  constructor(private http: HttpClient) {}

  getAuthorById(id: number): Observable<AuthorDTO> {
    return this.http.get<AuthorDTO>(`${this.apiUrl}/${id}`);
  }

  getAllAuthors(): Observable<AuthorDTO[]> {
    return this.http.get<AuthorDTO[]>(this.apiUrl);
  }

  createAuthor(author: AuthorDTO): Observable<AuthorDTO> {
    return this.http.post<AuthorDTO>(this.apiUrl, author);
  }

  deleteAuthor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
