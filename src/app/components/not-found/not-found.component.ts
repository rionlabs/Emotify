import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-not-found',
    template: `
        <div class="center-align container">
            <br>
            <br>
            <br>
            <div class="section">
                <h3>
                    It's a 404!
                </h3>
                <br>
                <h2>
                    (▰˘︹˘▰)
                </h2>
            </div>
            <br>
            <div class="section">
                <h5>The page you want to visit does not exist!</h5>
                <a routerLink="">
                    <button mat-button>Visit Home</button>
                </a>
            </div>
            <br>
            <br>
            <br>
            <div class="row">
                Having Issues? Send us email at <a href="mailto:mail@emotify.io">mail@emotify.io</a>!
            </div>
            <br>
            <br>
        </div>
    `
})
export class NotFoundComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
