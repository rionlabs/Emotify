import {Component, OnInit} from '@angular/core';
import {ContentsService} from "../../services/contents.service";
import {Person} from "../../models/Person";

@Component({
    selector: 'app-footer',
    template: `
        <footer class="page-footer deep-orange">
            <div class="container">
                <div class="row">

                    <div class="col m5 s10 offset-s1 center-align">
                        <h5 class="white-text">Around Web</h5>
                        <p class="white-text">Emotify is free and open sourced source, the code is available on GitHub! Also our Android and iOS apps are coming soon on Play Store!</p>
                        <a href="https://github.com/emotify" class="btn white deep-orange-text ">View on GitHub</a>
                    </div>

                    <div class="col m2 s12 center-align">
                        
                    </div>

                    <div class="col m5 s10 offset-s1 center-align">
                        <h5 class="white-text">Get News</h5>

                        <div class="input-field" id="subscribe-email">
                            <p class="white-text">Get updated when we update something! We will send very occasional emails.</p>
                            <input id="email-input" type="email" class="validate" placeholder="Email">
                            <button class="btn white deep-orange-text">Subscribe</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container center-align">
                    Copyright @2017 Emotify
                </div>
            </div>
        </footer>
    `,
    styles: [
        `
            /* label focus color */
            .input-field input[type=text]:focus + label {
                color: #000;
            }
            /* label underline focus color */
            .input-field input[type=text]:focus {
                border-bottom: 1px solid #000;
                box-shadow: 0 1px 0 0 #000;
            }
            #subscribe-email {
            
            }
            #email-input {
                
            }
        `
    ]
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
