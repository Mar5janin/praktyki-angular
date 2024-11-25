import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostBookComponent } from './components/book/post-book/post-book.component';
import { GetBookIDComponent } from './components/book/get-book-id/get-book-id.component';
import { GetBooksComponent } from './components/book/get-books/get-books.component';
import { UpdateBookComponent } from './components/book/update-book/update-book.component';
import { PostAuthorComponent } from './components/author/post-author/post-author.component';
import { GetAuthorIDComponent } from './components/author/get-author-id/get-author-id.component';
import { GetAuthorsComponent } from './components/author/get-authors/get-authors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    PostBookComponent,
    GetBookIDComponent,
    GetBooksComponent,
    UpdateBookComponent,
    PostAuthorComponent,
    GetAuthorIDComponent,
    GetAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
