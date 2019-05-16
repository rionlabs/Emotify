import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer>
            <mat-toolbar>
                <div class="container center-align">
                    <span id="rionlabs-logo">rionlabs</span>　&　ヽ(♡‿♡)ノ
                </div>
            </mat-toolbar>
        </footer>
    `
})
export class FooterComponent implements OnInit {

    ngOnInit() {
    }

}
