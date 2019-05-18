import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material";
import * as $ from 'jquery';

@Component({
    selector: 'app-emoticons',
    templateUrl: "emoticons.html",
    styleUrls: ["emoticons.css"]
})
export class EmoticonsComponent implements OnInit {

    items: Observable<any[]>;
    emoticonList: Observable<any[]>;

    activeTag = "Popular";

    constructor(private db: AngularFireDatabase, private snackBar: MatSnackBar) {
        const listRef = db.list('metadata/tagCount', ref => ref.orderByKey());
        this.items = listRef.snapshotChanges();
        this.loadPopularEmoticons();
    }

    ngOnInit() {
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

    onEmoticonClick($event, emoticon) {
        this.copyToClipBoard($event, emoticon);
        this.updateDb(emoticon);
    }

    /**
     * Copies emoticon content to clipboard.
     *
     * @param $event
     * @param emoticon
     */
    copyToClipBoard($event, emoticon) {
        let emoticonText = $event.target.innerHTML;

        let textArea = $('#clipboard-area');
        textArea.text(emoticonText);
        textArea.select();
        try {
            let successful = document.execCommand('copy');
            if (successful) {
                this.snackBar.open("Copied! " + emoticon.emoticon, "Dismiss", {duration: 1000})
            } else {
                this.snackBar.open("Copy Failed!", "Dismiss", {duration: 1000})
            }
        } catch (err) {
            console.log('Oops, unable to copy!', "Dismiss", {duration: 1000})
        }
    }

    /**
     * Increase counter in database.
     * @param emoticon
     */
    updateDb(emoticon) {
        let newCounter = emoticon.useCounter + 1;
        let path = 'emoticons/' + emoticon.hash + '/useCounter';
        this.db.object(path).set(newCounter)
            .catch(err => console.log(err, 'Error!'));
    }
}
