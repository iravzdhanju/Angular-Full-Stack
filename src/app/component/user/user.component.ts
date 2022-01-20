import { Component } from '@angular/core'
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],


})

export class UserComponent {
    firstName: String = 'John';

    lastName: String = 'Doe';
    age: number = 20;
    address = {
        street: 'Street',
        city: 'City',

    };



    constructor() {


    }

}