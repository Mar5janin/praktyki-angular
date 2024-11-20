import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService, BookDTO } from '../../../services/book.service';

@Component({
  selector: 'app-get-book-id',
  templateUrl: './get-book-id.component.html',
  styleUrls: ['./get-book-id.component.css']
})
export class GetBookIDComponent implements OnInit {
  book: BookDTO | null = null;
  isLoading = true; 

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['id']; 
    if (bookId) {
      this.fetchBookDetails(bookId);
    }
  }

  fetchBookDetails(id: number): void {
    this.isLoading = true;
    this.bookService.getBookById(id).subscribe({
      next: (data) => {
        this.book = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching book details:', err);
        this.isLoading = false;
      }
    });
  }
}
