import { Component, OnInit } from '@angular/core';
import { AuthorService, AuthorDTO } from '../../../services/author.service';

@Component({
  selector: 'app-get-authors',
  templateUrl: './get-authors.component.html',
  styleUrls: ['./get-authors.component.css']
})
export class GetAuthorsComponent implements OnInit {
  authors: AuthorDTO[] = [];
  isLoading = true;

  constructor(private authorService: AuthorService) {}

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
}
