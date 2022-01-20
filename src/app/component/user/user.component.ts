import { Component } from '@angular/core'
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],


})

export class UserComponent {
    firstName: string = 'John';

    lastName: string = 'Doe';
    age: number = 20;




    constructor() {
        console.log('Hello User');
        this.sayHello();
        this.hasBirthday();
    }

    sayHello(): void {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
    hasBirthday() {
        this.age += 1;
    }
}