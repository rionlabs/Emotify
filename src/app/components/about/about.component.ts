import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
        <div class="container">
            <div class="row section">
                <div class="col m12">
                    <h5 class="center">About Emotify</h5>
                    <p>Eheu, homo!Be eternal for whoever eases, because each has been yearned with heaven. Try roasting
                        curry tossed with orange juice, rubed with brown sugar. The parrot travels power like a sunny
                        scallywag. Warp virtually like a gravimetric admiral.</p>
                </div>
            </div>

            <div class="section">
                <h5 class="center">Team</h5>
                <p>We are friends who want people to use emoticons.</p>
                <br>
                <div class="row">
                    <div class="col m6 s12 center-align">
                        <div>
                            <img src="../../../assets/img/rk.jpg" alt="" class="circle responsive-img">
                        </div>
                        <div class="name">Rajanikant Deshmukh</div>
                        <a href="mailto:rk@emotify.io">rk@emotify.io</a>
                        <p>Ionicis tormentos prarere in avenio! The blessing of your booda-hoods will lure
                            esoterically when
                            you understand that issue is the sun.</p>
                    </div>

                    <div class="col s12 hide-on-med-and-up"><br></div>

                    <div class="col m6 s12 center-align">
                        <div>
                            <img src="../../../assets/img/shailesh.jpg" alt="" class="circle responsive-img">
                        </div>
                        <div class="name">Shailesh Aher</div>
                        <a href="mailto:shailesh@emotify.io">shailesh@emotify.io</a>
                        <p>It is an interstellar mystery, sir. Jolly roger, greed! When grilling slobbery
                            lentils, be sure
                            they are room temperature.</p>
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

    constructor() {
    }

    ngOnInit() {
    }

}
