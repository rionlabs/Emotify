import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-nav-bar',
    template: `
        <nav class="deep-orange" role="navigation">
            <div class="nav-wrapper navbar-fixed container">
                <a id="logo-container" class="brand-logo" routerLink="/">Emotify</a>
                <ul class="right hide-on-med-and-down">
                    <li><a routerLink="/">Home</a></li>
                </ul>

                <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
            </div>
        </nav>
    `,
    styles: []
})
export class NavBarComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
