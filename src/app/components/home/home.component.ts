import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <app-banner></app-banner>
        <app-emoticons></app-emoticons>
    `,
    styles: []
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
