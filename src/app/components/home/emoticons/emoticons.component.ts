import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from "rxjs";
import * as $ from 'jquery';

@Component({
    selector: 'app-emoticons',
    template: `
        <!-- Main Contents -->
        <div class="row">

            <div class="col m5">
                <!-- Tags Section -->
                <div class="section center-align" id="tag-container">
                    <div class="chip chip-active" (click)="loadPopularEmoticons()">
                        Popular
                    </div>
                    <div *ngFor="let item of items | async" class="chip"
                         (click)="loadTaggedEmoticon(item)">{{item.key | titlecase}}</div>
                </div>
            </div>

            <div class="col m7">

                <!-- Emoticons Section -->
                <div class="section center-align">
                    <div *ngFor="let e of emoticonList | async" id="{{e.hash}}" class="big-chip"
                         (click)="copyToClipBoard($event, e)">{{e.emoticon}}</div>
                </div>
            </div>
        </div>

        <textarea id="temp-area"
                  style="position: fixed; width: 2em; height: 2em; border: none; outline: none; box-shadow: none; background: transparent;"></textarea>

        <!-- Search Section -->
        <div class="section center-align">

        </div>




    `,
    styles: [
            `
            .big-chip {
                display: inline-block;
                height: 48px;
                font-size: 14px;
                font-weight: 300;
                color: rgba(0, 0, 0, 0.9);
                line-height: 48px;
                padding: 0 16px;
                border-radius: 24px;
                border: 1px solid rgba(0, 0, 0, 0.4);
                margin-bottom: 10px;
                margin-right: 10px;
            }

            .big-chip:hover {
            / / font-weight: 400;
                cursor: pointer;
                color: rgba(0, 0, 0, 0.95);
                border: 1px solid rgba(0, 0, 0, 0.2);
                background-color: #DDD;
            }

            .chip {
                display: inline-block;
                height: 24px;
                font-size: 12px;
                font-weight: 300;
                color: rgba(0, 0, 0, 0.70);
                line-height: 24px;
                padding: 0 8px;
                border-radius: 12px;
                background-color: #e4e4e4;
                margin-bottom: 5px;
                margin-right: 5px;
            }

            .chip:hover {
                cursor: pointer;
                color: rgba(0, 0, 0, 0.85);
                background-color: #c3c3c3;
            }

            .chip-active {
                cursor: pointer;
                color: rgba(0, 0, 0, 0.80);
                background-color: #bababa;
            }
        `
    ]
})
export class EmoticonsComponent implements OnInit {

    items: Observable<any[]>;
    emoticonList: Observable<any[]>;

    activeTag = "Popular";

    constructor(private db: AngularFireDatabase) {
        const listRef = db.list('metadata/tagCount', ref => ref.orderByKey());
        this.items = listRef.snapshotChanges();
        this.loadPopularEmoticons();
    }

    loadTaggedEmoticon(item): void {
        let emoticonTag = item.key;
        this.activeTag = emoticonTag;
        const listRef = this.db.list('emoticons', ref => ref.orderByChild('tags/' + emoticonTag).equalTo(true));
        this.emoticonList = listRef.valueChanges();

        // Set Active Tag
        let tagContainer = $('#tag-container');
        tagContainer.children('.chip-active').removeClass('chip-active');
        tagContainer.children().filter(function () {
            return $(this).text().toLowerCase() === emoticonTag;
        }).addClass('chip-active');
    }

    loadPopularEmoticons() {
        const popularEmoticonRef = this.db.list('emoticons', ref => ref.orderByChild('useCounter').limitToLast(50));
        this.emoticonList = popularEmoticonRef.valueChanges();
    }

    copyToClipBoard($event, emoticon) {
        // Copy text to clipboard
        let emoticonText = $event.target.innerHTML;

        let textArea = $('#temp-area');
        textArea.text(emoticonText);
        textArea.select();
        try {
            let successful = document.execCommand('copy');
            if (!successful)
                console.log("Could not copy");
        } catch (err) {
            console.log('Oops, unable to copy');
        }

        // Show on element
        let emoticonTarget = $('div#' + emoticon.hash);
        console.log('div#' + emoticon.hash);
        console.log(emoticonTarget);
        emoticonTarget.html("Copied!");
        emoticonTarget.fadeTo(600, 0, function () {
            $(this).delay(500);
            $(this).html(emoticonText);
            $(this).fadeTo(600, 1);
        });

        // Counter in db
        let newCounter = emoticon.useCounter + 1;
        let path = 'emoticons/' + emoticon.hash + '/useCounter';
        this.db.object(path).set(newCounter)
            .catch(err => console.log(err, 'Error!'));
    }

    ngOnInit() {
    }

}
