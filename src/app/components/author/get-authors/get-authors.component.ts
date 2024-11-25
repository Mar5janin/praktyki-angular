import { Component, OnInit } from '@angular/core';
import { AuthorService, AuthorDTO } from '../../../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-authors',
  templateUrl: './get-authors.component.html',
  styleUrls: ['./get-authors.component.css']
})
export class GetAuthorsComponent implements OnInit {
  authors: AuthorDTO[] = [];
  isLoading = true;

  constructor(private authorService: AuthorService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAuthors();
  }

  fetchAuthors(): void {
    this.isLoading = true;
    this.authorService.getAllAuthors().subscribe({
      next: (data) => {
        this.authors = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching authors:', err);
        this.isLoading = false;
      }
    });
  }

  deleteAuthor(id: number): void {
    if (confirm('Czy na pewno chcesz usunąć tego autora?')) {
      this.authorService.deleteAuthor(id).subscribe({
        next: () => {
          this.authors = this.authors.filter(author => author.id !== id);
        },
        error: (err) => console.error('Error deleting author:', err)
      });
    }
  }

  goToAuthorDetails(id: number): void {
    this.router.navigate(['/authors', id]);
  }

  navigateToPostAuthor(): void {
    this.router.navigate(['/authors/post']);
  }

  navigateToBooks(): void {
    this.router.navigate(['/books']);
  }
}
