import {Component, OnInit} from '@angular/core';
import {Contents} from "../../static-contents";

@Component({
    selector: 'app-not-found',
    template: `

        <div class="center-align container">
            <br>
            <br>
            <br>
            <div class="section">
                <h1>
                    404
                </h1>
                <br>
                <h1>
                    (▰˘︹˘▰)
                </h1>
            </div>

            <br>

            <div class="section">
                <h5>The page you requested does not exist! Sad!</h5>
                <h5>Visit <a routerLink="">Home</a></h5>
            </div>
            <br>
            <br>
            <br>

            <div class="row">
                Having Issues? Report on <a href="{{github_issue}}">Github</a> or <a
                    href="mailto:{{contact_email}}">e-mail</a> us directly.
            </div>


        </div>
    `,
    styles: [
            `
            html {
                height: 100%;
                padding-bottom: 10rem;
            }

            footer {
                position: relative;
                bottom: 0;
            }`
    ]
})
export class NotFoundComponent implements OnInit {

    github_issue = Contents.github_issue_url;
    contact_email = Contents.contact_email;

    constructor() {
    }

    ngOnInit() {
    }

}