import { Component, OnInit } from '@angular/core';
import { BookService, BookDTO } from '../../../services/book.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.css']
})
export class GetBooksComponent implements OnInit {
  books: BookDTO[] = []; 
  isLoading = true; 

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.isLoading = true;
    this.bookService.getAllBooks().subscribe({
      next: (data) => {
        this.books = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching books:', err);
        this.isLoading = false;
      }
    });
  }

  deleteBook(id: number): void {
    if (confirm('Czy na pewno chcesz usunąć tę książkę?')) {
      this.bookService.deleteBookById(id).subscribe({
        next: () => {
          this.books = this.books.filter(book => book.id !== id);
        },
        error: (err) => console.error('Error deleting book:', err)
      });
    }
  }
}
