import { Component, OnInit } from '@angular/core';

import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }
  booksArray = [];
  showDelMessage: boolean;
  searchText: string = '';

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      list => {
        this.booksArray = list.map(item=>{
          return {
            $key:item.key,
            ...item.payload.val()
          };
        })
      }
    );
  }

  onDelete($key){
    if(confirm("Are you sure to delete this record ? ")){
      this.bookService.deleteBook($key)
      this.showDelMessage = true;
      setTimeout(()=> this.showDelMessage=false,3000);
    }
  }
  // filterCondition(book){
  //   return book.title.toLoweCase().indexOf(this.searchText.toLowerCase()) != -1;
  // }

}
