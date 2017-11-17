import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-emoticons',
    template: `
        <!-- Main Contents -->
        <div class="container">

            <div class="section">

                <!--   Emoticon Section   -->
                <ul class="tabs">
                    <li class="tab col s3"><a class="active" href="#section-excited">Excited</a></li>
                    <li class="tab col s3"><a href="#section-happy">Happy</a></li>
                    <li class="tab col s3"><a href="#section-love">Love</a></li>
                    <li class="tab col s3"><a href="#section-meh">Meh</a></li>
                    <li class="tab col s3"><a href="#section-surprised">Surprised</a></li>
                    <li class="tab col s3"><a href="#section-angry">Angry</a></li>
                    <li class="tab col s3"><a href="#section-sad">Sad</a></li>
                </ul>

                <!-- -->
                <div id="section-excited" class="col s12 section">
                    <div class="collection">
                        <a class="collection-item">o(^▽^)o</a>
                        <a class="collection-item">o(^◇^)o</a>
                        <a class="collection-item">(/^▽^)/</a>
                        <a class="collection-item">ヽ(;^o^ヽ)</a>
                        <a class="collection-item">ヽ(*⌒∇⌒*)ﾉ</a>
                        <a class="collection-item">╰( ･ ᗜ ･ )╯</a>
                        <a class="collection-item">ヾ(o✪‿✪o)ｼ</a>
                        <a class="collection-item">٩(^ᴗ^)۶</a>
                        <a class="collection-item">ヽ(´ω｀○)ﾉ.+ﾟ*｡:ﾟ+</a>
                        <a class="collection-item">٩(θ‿θ)۶</a>
                    </div>
                </div>

                <!-- -->
                <div id="section-happy" class="col s12 section">
                    <div class="collection">
                        <a class="collection-item">∠( ᐛ 」∠)＿</a>
                        <a class="collection-item">ᕕ( ᐛ )ᕗ</a>
                        <a class="collection-item">( ´ ▽ \` )ﾉ</a>
                        <a class="collection-item">~ヾ(＾∇＾)</a>
                        <a class="collection-item">(ノ・∀・)ノ</a>
                        <a class="collection-item">(*´・ｖ・)</a>
                        <a class="collection-item">（ｖ＾＿＾）ｖ</a>
                        <a class="collection-item">˚✧₊⁎( ˘ω˘ )⁎⁺˳✧༚</a>
                        <a class="collection-item">(＊◕ᴗ◕＊)</a>
                        <a class="collection-item">(　◠ ◡ ◠　)</a>
                    </div>
                </div>

                <!-- -->
                <div id="section-love" class="col s12 section">
                    <div class="collection">
                        <a class="collection-item">(｡♥‿♥｡)</a>
                        <a class="collection-item">໒( ♥ ◡ ♥ )७</a>
                        <a class="collection-item">（´・｀ ）♡</a>
                        <a class="collection-item">（●´∀｀）ノ♡</a>
                        <a class="collection-item">(◍•ᴗ•◍)❤</a>
                        <a class="collection-item">( ⌯◞◟⌯)♡</a>
                        <a class="collection-item">╰(✿´⌣\`✿)╯♡</a>
                        <a class="collection-item">（。ˇ ⊖ˇ）♡</a>
                        <a class="collection-item">(ˆˇˆ)-c<˘ˑ˘)</a>
                        <a class="collection-item">(◍•ᴗ•◍)♡ ✧*。</a>
                    </div>
                </div>

                <!-- -->
                <div id="section-meh" class="col s12 section">
                    <div class="collection">
                        <a class="collection-item">¯\\_(ツ)_/¯</a>
                        <a class="collection-item">¯\\_(⊙_ʖ⊙)_/¯</a>
                        <a class="collection-item">＼（〇_ｏ）／</a>
                        <a class="collection-item">┐(￣ー￣)┌</a>
                        <a class="collection-item">└(・-・)┘</a>
                        <a class="collection-item">╮(─▽─)╭</a>
                        <a class="collection-item">╰| ⊡ _ ⊡ |╯</a>
                        <a class="collection-item">ヽ(´ー\`)ﾉ</a>
                        <a class="collection-item">ʅ(｡◔‸◔｡)ʃ</a>
                        <a class="collection-item">┻━┻ ︵ ¯\\ (ツ)/¯ ︵ ┻━┻</a>
                    </div>
                </div>

                <!-- -->
                <div id="section-surprised" class="col s12 section">
                    <div class="collection">
                        <a class="collection-item">（・□・；）</a>
                        <a class="collection-item">（＊〇□〇）……！</a>
                        <a class="collection-item">(・о・)</a>
                        <a class="collection-item">＼(>o<)ノ</a>
                        <a class="collection-item">(ﾉﾟ0ﾟ)ﾉ~</a>
                        <a class="collection-item">(´⊙ω⊙\`)！</a>
                        <a class="collection-item">(´⊙ω⊙\`)ᵒᵐᵍᵎᵎᵎ</a>
                        <a class="collection-item">(ᵒ̤̑ ₀̑ ᵒ̤̑)wow!*✰</a>
                        <a class="collection-item">(´･艸･｀)</a>
                        <a class="collection-item">((((；゜Д゜)))</a>
                    </div>
                </div>

                <div id="section-angry" class="col s12 section">
                    <div class="collection">
                        <a class="collection-item">(；￣Д￣）</a>
                        <a class="collection-item">(*￣m￣)</a>
                        <a class="collection-item">＼(｀0´)／</a>
                        <a class="collection-item">o(｀□´)○</a>
                        <a class="collection-item">ヾ( ･\`⌓´･)ﾉﾞ</a>
                        <a class="collection-item">ᕙ(⇀‸↼‶)ᕗ</a>
                        <a class="collection-item">(＃｀д´)ﾉ</a>
                        <a class="collection-item">(╯°□°）╯︵ ┻━┻</a>
                        <a class="collection-item">ヽ(#ﾟДﾟ)ﾉ┌┛Σ(ノ´Д\`)ノ</a>
                        <a class="collection-item">凸(｀0´)凸</a>
                    </div>
                </div>

                <!-- -->
                <div id="section-sad" class="col s12 section">
                    <div class="collection">
                        <a class="collection-item">(▰˘︹˘▰)</a>
                        <a class="collection-item">（（●´∧｀●））</a>
                        <a class="collection-item">(っ˘̩╭╮˘̩)っ</a>
                        <a class="collection-item">(个_个)</a>
                        <a class="collection-item">( ɵ̥̥ ˑ̫ ɵ̥̥)</a>
                        <a class="collection-item">｡゜(｀Д´)゜｡</a>
                        <a class="collection-item">ヽ(´□｀。)ﾉ</a>
                        <a class="collection-item">(ノ﹏ヽ)</a>
                        <a class="collection-item">｡･ﾟﾟ･o（ｉДｉ）o･ﾟﾟ･｡</a>
                        <a class="collection-item">.・゜゜・（／。＼）・゜゜・．</a>
                    </div>
                </div>
            </div>
            <br><br>
        </div>
    `,
    styles: []
})
export class EmoticonsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
