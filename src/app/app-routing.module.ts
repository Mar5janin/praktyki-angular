import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostBookComponent } from './components/book/post-book/post-book.component';
import { GetBooksComponent } from './components/book/get-books/get-books.component';
import { GetAuthorsComponent } from './components/author/get-authors/get-authors.component';
import { PostAuthorComponent } from './components/author/post-author/post-author.component';
import { GetAuthorIDComponent } from './components/author/get-author-id/get-author-id.component';
import { GetBookIDComponent } from './components/book/get-book-id/get-book-id.component';
import { UpdateBookComponent } from './components/book/update-book/update-book.component';

const routes: Routes = [
  { path: 'books', component: GetBooksComponent },
  { path: 'books/post', component: PostBookComponent },
  { path: 'books/:id', component: GetBookIDComponent },
  { path: 'books/update/:id', component: UpdateBookComponent },
  { path: 'authors', component: GetAuthorsComponent },
  { path: 'authors/post', component: PostAuthorComponent },
  { path: 'authors/:id', component: GetAuthorIDComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
