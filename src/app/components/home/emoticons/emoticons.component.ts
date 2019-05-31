import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {MatSnackBar} from "@angular/material";
import * as $ from 'jquery';
import {EmoticonsService} from "../../../service/emoticons.service";
import {MiniEmoticon} from "../../../models/MiniEmoticon";

@Component({
    selector: 'app-emoticons',
    templateUrl: "emoticons.html",
    styleUrls: ["emoticons.css"]
})
export class EmoticonsComponent implements OnInit {

    items: Observable<any[]>;
    emoticonList: Observable<MiniEmoticon[]>;

    activeTag: string;

    constructor(
        private emoticonsService: EmoticonsService,
        private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.items = this.emoticonsService.getTags();
        this.emoticonList = this.emoticonsService.getStaticEmoticons();
    }

    loadTaggedEmoticon(item): void {
        let emoticonTag = item.key;
        this.activeTag = emoticonTag;
        this.emoticonList = this.emoticonsService.getTaggedEmoticons(this.activeTag);

        // Set Active Tag
        let tagContainer = $('#tag-container');
        tagContainer.children('.chip-active').removeClass('chip-active');
        tagContainer.children().filter(function () {
            return $(this).text().toLowerCase() === emoticonTag;
        }).addClass('chip-active');
    }

    loadPopularEmoticons() {
        this.emoticonList = this.emoticonsService.getPopularEmoticons();
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
        this.emoticonsService.increaseUserCounter(emoticon)
    }
}
