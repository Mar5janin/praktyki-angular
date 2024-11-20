import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService, BookDTO } from '../../../services/book.service';
import { AuthorService, AuthorDTO } from '../../..//services/author.service';

@Component({
  selector: 'app-post-book',
  templateUrl: './post-book.component.html',
  styleUrls: ['./post-book.component.css']
})
export class PostBookComponent {
  book: Partial<BookDTO> = {}; 
  authors: AuthorDTO[] = []; 
  isLoading = false;

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private router: Router
  ) {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorService.getAllAuthors().subscribe({
      next: (data) => {
        this.authors = data;
      },
      error: (err) => console.error('Error fetching authors:', err)
    });
  }

  saveBook(): void {
    if (!this.book.name || !this.book.author || !this.book.price) {
      alert('Wypełnij wszystkie wymagane pola!');
      return;
    }

    this.isLoading = true;
    this.bookService.createBook(this.book as BookDTO).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/books']);
      },
      error: (err) => {
        console.error('Error saving book:', err);
        this.isLoading = false;
      }
    });
  }
}
