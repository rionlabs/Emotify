import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="page-footer deep-orange">
            <div class="container">
                <div class="row">
                    <div class="col l6 m6 s12 center-align">
                        <h5 class="white-text">What are Emoticons?</h5>
                        <p class="white-text">
                            First things first! Emojis and Emoticon are not the same things. Emoticons are emojis
                            created with ASCII characters. You can consider emoticons the great-grandfather of emojis,
                            what we use nowadays. They are just plain text, and it was a traditional way of
                            communicating and was a huge thing when the internet first came out. Emoticons are also
                            known as Kaomoji (顔文字), of course of Japanese origin.
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSffwwOJmZdeSvbgL6G1XhIMjKcqLZZS-BcqO0Z4dPU8oJBKzw/viewform?usp=sf_link"
                           target="_blank"
                           class="waves-effect waves-light btn deep-orange-text rounded">Give us Feedback</a>

                    </div>

                    <div class="col l6 m6 s12 center-align">
                        <h5 class="white-text">We are open sourced!</h5>
                        <p class="white-text">
                            Emotify is free, and open-sourced app maintained by rionlabs. The code is available
                            on GitHub! This is an Angular App with Firebase as it's backend, and hosted on Firebase
                            itself. If you are interested in programming, feel free to create PRs for new features, or
                            create issues to let us know we
                            broke something! You can also contact us for anything else at <a id="support-mail"
                                                                                             href="mailto:mail@rionlabs.org"
                                                                                             class="white-text">mail@rionlabs.org</a>.
                        </p>
                        <a href="https://github.com/rionlabs/Emotify" target="_blank"
                           class="waves-effect waves-light btn deep-orange-text rounded">View
                            on GitHub</a>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container center-align">
                    <a href="https://github.com/rionlabs" target="_blank" id="rionlabs-logo"
                       class="white-text">rionlabs</a>
                </div>
            </div>
        </footer>
    `,
    styles: [
            `
            .btn {
                border-radius: 16px;
                background-color: #fff;
                text-transform: none;
            }

            #support-mail {
                text-decoration: underline;
            }

            #rionlabs-logo {
                font-family: 'Orbitron', sans-serif;
            }
        `
    ]
})
export class FooterComponent implements OnInit {

    ngOnInit() {
    }

}
