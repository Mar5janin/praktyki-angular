import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService, BookDTO } from '../../../services/book.service';
import { AuthorService, AuthorDTO } from '../../../services/author.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: Partial<BookDTO> = {}; 
  authors: AuthorDTO[] = []; 
  isLoading = true;

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['id']; 
    if (bookId) {
      this.fetchBookDetails(bookId);
    }
    this.loadAuthors(); 
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

  loadAuthors(): void {
    this.authorService.getAllAuthors().subscribe({
      next: (data) => {
        this.authors = data;
      },
      error: (err) => console.error('Error fetching authors:', err)
    });
  }

  updateBook(): void {
    if (!this.book.name || !this.book.year || !this.book.price) {
      alert('Wypełnij wszystkie wymagane pola!');
      return;
    }

    this.isLoading = true;
    this.bookService.updateBook(this.book.id!, this.book as BookDTO).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error('Error updating book:', err);
        this.isLoading = false;
      }
    });
  }
}
