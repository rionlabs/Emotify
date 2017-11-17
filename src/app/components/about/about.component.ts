import {Component, OnInit} from '@angular/core';
import {Contents} from "../../static-contents";

@Component({
    selector: 'app-about',
    template: `
        <div class="container">
            <div class="row section">
                <div class="col m12">
                    <h5 class="center">About Emotify</h5>
                    <p>{{about_emotify}}</p>
                </div>
            </div>

            <div class="section">
                <h5 class="center">Team</h5>
                <p>{{about_team}}</p>
                <br>
                <div class="row">
                    <div class="col m6 s12 center-align">
                        <div>
                            <img src="../../../assets/img/rk.jpg" alt="" class="circle responsive-img">
                        </div>
                        <div class="name">{{team.rk.name}}</div>
                        <a href="mailto:{{team.rk.email}}">{{team.rk.email}}</a>
                        <p>{{team.rk.about}}</p>
                    </div>

                    <div class="col s12 hide-on-med-and-up"><br></div>

                    <div class="col m6 s12 center-align">
                        <div>
                            <img src="../../../assets/img/shailesh.jpg" alt="" class="circle responsive-img">
                        </div>
                        <div class="name">{{team.shaily.name}}</div>
                        <a href="mailto:{{team.shaily.email}}">{{team.shaily.email}}</a>
                        <p>{{team.shaily.about}}</p>
                    </div>

                </div>
            </div>
        </div>
    `,
    styles: [
            `
            .name {
                font-size: larger;
            }
        `
    ]
})
export class AboutComponent implements OnInit {

    team = Contents.team;
    about_emotify = Contents.about_emotify_text;
    about_team = Contents.about_team_text;

    constructor() {
    }

    ngOnInit() {
    }

}
