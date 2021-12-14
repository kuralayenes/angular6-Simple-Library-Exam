import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

import { BookService } from '../services/book.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(public afAuth: AngularFireAuth,public bookService: BookService) { }
    submitted : boolean;
    showSuccessMessage: boolean;
    formControls = this.bookService.form.controls;

    ngOnInit(): void {
    }

    logout(): void {
        this.afAuth.signOut();
    }
    onSubmit(){
        this.submitted = true;
        if(this.bookService.form.valid){
            if(this.bookService.form.get('$key').value==null)
                this.bookService.insertBooks(this.bookService.form.value);
                else
                this.bookService.updateBook(this.bookService.form.value);
                this.showSuccessMessage = true;
                setTimeout(()=> this.showSuccessMessage = false, 3000);
            this.submitted = false;
            this.bookService.form.reset();
        }
       
        
    }
}
