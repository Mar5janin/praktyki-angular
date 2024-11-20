import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorDTO } from './author.service';

export interface BookDTO {
  id: number;
  name: string;
  year: number;
  publisher: string;
  price: number;
  author: AuthorDTO;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/v1/book';

  constructor(private http: HttpClient) {}

  getBookById(id: number): Observable<BookDTO> {
    return this.http.get<BookDTO>(`${this.apiUrl}/${id}`);
  }

  getAllBooks(): Observable<BookDTO[]> {
    return this.http.get<BookDTO[]>(this.apiUrl);
  }

  createBook(book: BookDTO): Observable<BookDTO> {
    return this.http.post<BookDTO>(this.apiUrl, book);
  }

  updateBook(id: number, book: BookDTO): Observable<BookDTO> {
    return this.http.put<BookDTO>(`${this.apiUrl}/${id}`, book);
  }

  deleteBookById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
