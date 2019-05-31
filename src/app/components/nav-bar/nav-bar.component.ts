import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-nav-bar',
    template: `
        <mat-toolbar color="primary">
            <mat-toolbar-row>
                <div class="container" id="logo-container">
                    <div class="row">
                        <div class="center col s12">
                            <span id="emotify-logo">emotify</span>
                        </div>
                    </div>
                </div>
            </mat-toolbar-row>
            <mat-toolbar-row>
                <div class="container">
                    <div class="row">
                        <div class="col l8 offset-l2 m10 offset-m1 s12">
                            <input matInput id="search-input" class="z-depth-4" type="search" placeholder="Search">
                        </div>
                    </div>
                </div>
            </mat-toolbar-row>

        </mat-toolbar>
    `,
    styles: [`
        #logo-container {
            padding-top: 12px;
        }

        #emotify-logo {
            font-family: 'Josefin Sans', sans-serif;
            font-size: 2.5rem;
        }

        #search-input {
            background-color: #FFF;
            border-width: 0;
            height: 3rem;
            border-radius: 1.5rem;
            padding-right: 1.5rem;
            padding-left: 1.5rem;
            max-width: -webkit-fill-available;
            -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        #search-input:focus {
            -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
        }

        #search-input:hover {
            -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
            box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
        }
    `]
})
export class NavBarComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
