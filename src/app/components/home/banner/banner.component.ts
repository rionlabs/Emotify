import {Component, OnInit} from '@angular/core';
import {Contents} from "../../../static-contents";

@Component({
    selector: 'app-banner',
    template: `
        <div class="section no-pad-bot" id="index-banner">
            <div class="container">
                <br>
                <h3 class="header center orange-text">{{banner_title}}</h3>
                <div class="row center">
                    <h5 class="header col s12 light">{{banner_text}}</h5>
                </div>
                <br>
            </div>
        </div>
    `,
    styles: []
})
export class BannerComponent implements OnInit {

    banner_title = Contents.banner_title;
    banner_text = Contents.banner_text;

    constructor() {
    }

    ngOnInit() {
    }

}
