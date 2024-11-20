import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService, AuthorDTO } from '../../../services/author.service';

@Component({
  selector: 'app-post-author',
  templateUrl: './post-author.component.html',
  styleUrls: ['./post-author.component.css']
})
export class PostAuthorComponent {
  author: Partial<AuthorDTO> = {}; 
  isLoading = false;

  constructor(private authorService: AuthorService, private router: Router) {}

  saveAuthor(): void {
    if (!this.author.name || !this.author.nationality) {
      alert('Wypełnij wszystkie wymagane pola!');
      return;
    }

    this.isLoading = true;
    this.authorService.createAuthor(this.author as AuthorDTO).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/authors']);
      },
      error: (err) => {
        console.error('Error saving author:', err);
        this.isLoading = false;
      }
    });
  }
}
