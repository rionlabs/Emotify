import {Component, OnInit} from '@angular/core';
import {ContentsService} from "../../services/contents.service";
import {Person} from "../../models/Person";

@Component({
    selector: 'app-footer',
    template: `
        <footer class="page-footer deep-orange">
            <div class="container">
                <div class="row">

                    <div class="col l4 s12 center-align section">
                        <h5 class="white-text">Open Source</h5>
                        <p class="grey-text text-lighten-4">Emotify source code is available on GitHub</p>
                        <a href="https://github.com/emotify" class="btn white deep-orange-text">View on GitHub</a>
                    </div>

                    <div class="col l4 s12 center-align">
                        <h5 class="white-text">About Emotify</h5>
                        <p class="grey-text text-lighten-4">We are friends who want to make people use emoticons.</p>
                        <div class="row">
                            <div class="col m4 offset-m1 center-align">
                                <img src="../../../assets/img/rk.jpg" alt=""
                                     class="circle responsive-img profile-pic">
                                Rajanikant
                                <a href="mailto:rk@emotify.io" class="grey-text text-lighten-3 center">rk@emotify.io</a>
                            </div>

                            <div class="col m4 offset-m1 center-align">
                                <img src="../../../assets/img/shailesh.jpg" alt=""
                                     class="circle responsive-img profile-pic">
                                Shailesh
                                <a href="mailto:shailesh@emotify.io"
                                   class="grey-text text-lighten-3 center">shailesh@emotify.io</a>
                            </div>
                        </div>
                    </div>

                    <div class="col l4 s12 center-align">
                        <h5 class="white-text">Get News</h5>

                        <div class="input-field" id="subscribe-email">
                            <input id="icon_prefix" type="email" class="validate white-text" placeholder="Email">
                        </div>
                        <button class="btn white deep-orange-text">Subscribe</button>


                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    Copyright @2017 Emotify
                </div>
            </div>
        </footer>
    `,
    styles: []
})
export class FooterComponent implements OnInit {

    team: Person[];

    constructor(private contentService: ContentsService) {
    }

    ngOnInit() {
        this.contentService.team.subscribe(team => {
            this.team = team;
            console.log(team);
        });
    }

}
