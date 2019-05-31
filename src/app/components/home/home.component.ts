import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div class="container">
            <app-emoticons></app-emoticons>
        </div>
    `,
    styles: [`
        .container {
            margin: 0 auto;
            max-width: 1280px;
            width: 95%
        }

        @media only screen and (min-width: 601px) {
            .container {
                width: 90%
            }
        }

        @media only screen and (min-width: 993px) {
            .container {
                width: 85%
            }
        }
    `]
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
