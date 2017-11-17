import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-banner',
    template: `
        <div class="section no-pad-bot" id="index-banner">
            <div class="container">
                <br>
                <h3 class="header center orange-text">Use Emoticons</h3>
                <div class="row center">
                    <h5 class="header col s12 light">Emoticons are emojis created with ASCII characters</h5>
                </div>
                <br>
            </div>
        </div>
    `,
    styles: []
})
export class BannerComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
