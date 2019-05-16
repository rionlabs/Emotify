import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-nav-bar',
    template: `
        <mat-toolbar color="primary">
            <mat-toolbar-row>
                <span>Emotify</span>
            </mat-toolbar-row>
        </mat-toolbar>
    `
})
export class NavBarComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
