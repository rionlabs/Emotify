import {Component, OnInit} from '@angular/core';
import {Contents} from "../../static-contents";

@Component({
    selector: 'app-about',
    template: `
        <div class="container">
            <div class="row section">
                <div class="col m12">
                    <h5 class="center">About Emotify</h5>
                    <p>{{about_emotify[0]}}</p>
                    <p>{{about_emotify[1]}}</p>
                </div>
            </div>

            <div class="section">
                <h5 class="center">Team</h5>
                <br>
                <div class="row">
                    <div class="col offset-l2 l4 offset-m1 m5 s12 center-align">
                        <div>
                            <img src="../../../assets/img/rk.jpg" alt="" class="profile-img  circle responsive-img">
                        </div>
                        <br>
                        <div class="name">{{team.rk.name}}</div>
                        <a href="mailto:{{team.rk.email}}">{{team.rk.email}}</a>
                
                        <div class="social-container">
                            <a target="_blank" href="{{team.rk.github_url}}">
                                <img class="social-icon" src="../../../assets/svg/github.svg">
                            </a>
                            <a target="_blank" href="{{team.rk.twitter_url}}">
                                <img class="social-icon" src="../../../assets/svg/twitter.svg">
                            </a>
                            <a target="_blank" href="{{team.rk.linkedin_url}}">
                                <img class="social-icon" src="../../../assets/svg/linkedin.svg">
                            </a>
                        </div>

                    </div>

                    <div class="col s12 hide-on-med-and-up"><br></div>

                    <div class="col l4 m5 s12 center-align">
                        <div>
                            <img src="../../../assets/img/shaily.png" alt="" class="profile-img circle responsive-img">
                        </div>
                        <br>
                        <div class="name">{{team.shaily.name}}</div>
                        <a href="mailto:{{team.shaily.email}}">{{team.shaily.email}}</a>
                        <div class="social-container">
                            <a target="_blank" href="{{team.shaily.github_url}}">
                                <img class="social-icon" src="../../../assets/svg/github.svg">
                            </a>
                            <a target="_blank" href="{{team.shaily.twitter_url}}">
                                <img class="social-icon" src="../../../assets/svg/twitter.svg">
                            </a>
                            <a target="_blank" href="{{team.shaily.linkedin_url}}">
                                <img class="social-icon" src="../../../assets/svg/linkedin.svg">
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `,
    styles: [
            `
            .profile-img {
                width: 150px;
                height: auto;
            }
            .name {
                font-size: larger;
            }

            .social-container {
                margin: 1rem 0;
            }

            .social-icon {
                margin: 0 8px;
                width: 32px;
                height: 32px;
            }
        `
    ]
})
export class AboutComponent implements OnInit {

    team = Contents.team;
    about_emotify = Contents.about_emotify_text;

    constructor() {
    }

    ngOnInit() {
    }

}
