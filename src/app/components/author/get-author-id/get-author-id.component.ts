import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService, AuthorDTO } from '../../../services/author.service';

@Component({
  selector: 'app-get-author-id',
  templateUrl: './get-author-id.component.html',
  styleUrls: ['./get-author-id.component.css']
})
export class GetAuthorIDComponent implements OnInit {
  author: AuthorDTO | null = null;
  isLoading = true;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const authorId = this.route.snapshot.params['id'];
    if (authorId) {
      this.fetchAuthorDetails(authorId);
    }
  }

  fetchAuthorDetails(id: number): void {
    this.isLoading = true;
    this.authorService.getAuthorById(id).subscribe({
      next: (data) => {
        this.author = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching author details:', err);
        this.isLoading = false;
      }
    });
  }
}
