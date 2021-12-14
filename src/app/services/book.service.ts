import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firebase:AngularFireDatabase) { }
  bookList: AngularFireList<any>
  form = new FormGroup({
    $key: new FormControl(null),
    id: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    page: new FormControl('',Validators.required),
    available: new FormControl('', Validators.required),
    
  });

  getBooks(){
    this.bookList = this.firebase.list('books');
    return this.bookList.snapshotChanges();
  }

  insertBooks(book){
    this.bookList.push({
      id : book.id,
      title: book.title,
      author: book.author,
      page: book.page,
      available: book.available
    });
  }

  populateForm(book){
    this.form.setValue(book);
  }
  updateBook(book){
    this.bookList.update(book.$key,{
      id: book.id,
      title: book.title,
      author: book.author,
      page: book.page,
      available: book.available
    });
  }

  deleteBook($key: string){
    this.bookList.remove($key);
  }

  
}
