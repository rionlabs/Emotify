import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MiniEmoticon} from "../models/MiniEmoticon";
import {BehaviorSubject, Observable} from "rxjs";
import {Emoticon} from "../models/Emoticon";
import {AngularFireDatabase} from 'angularfire2/database';
import {Tag} from "../models/Tag";

@Injectable({
    providedIn: 'root'
})
export class EmoticonsService {

    private readonly _tags: Observable<any>;

    private readonly _staticEmoticons: Observable<Array<MiniEmoticon>>;
    private readonly _popularEmoticons: Observable<Array<MiniEmoticon>>;

    private readonly emoticons: BehaviorSubject<Array<MiniEmoticon>>;

    private selectedTag: string = "";

    constructor(private http: HttpClient, private db: AngularFireDatabase) {
        this._tags = this.db.list('metadata/tagCount', ref => ref.orderByKey()).snapshotChanges();
        this._staticEmoticons = this.http.get("assets/static.json") as Observable<Array<MiniEmoticon>>;
        this._popularEmoticons = this.db.list('emoticons',
            ref => ref.orderByChild('useCounter').limitToLast(50))
            .valueChanges() as Observable<Array<Emoticon>>;
        this.emoticons = new BehaviorSubject<Array<MiniEmoticon>>([]);
        this.loadStaticEmoticons()
    }

    getTags(): Observable<Array<Tag>> {
        return this._tags as Observable<Array<Tag>>
    }

    loadStaticEmoticons() {
        this._staticEmoticons.subscribe((value) => {
            this.emoticons.next(value);
        });
    }

    loadPopularEmoticons() {
        this._popularEmoticons.subscribe((value) => {
            this.emoticons.next(value);
        });
    }

    setActiveTag(tag: string) {
        this.selectedTag = tag;
        this.loadTaggedEmoticons();
    }

    loadTaggedEmoticons() {
        if (this.selectedTag != "") {
            this.taggedSource(this.selectedTag).subscribe((value) => {
                this.emoticons.next(value);
            });
            console.log(this.emoticons)
        }
    }

    getEmoticons(): Observable<Array<MiniEmoticon>> {
        return this.emoticons.asObservable();
    }

    increaseUserCounter(miniEmoticon: MiniEmoticon) {
        let emoticon = (miniEmoticon as Emoticon);
        if (emoticon.useCounter != undefined) {
            let newCounter = emoticon.useCounter + 1;
            let path = 'emoticons/' + emoticon.hash + '/useCounter';
            this.db.object(path).set(newCounter)
                .catch(err => console.log(err, 'Error!'));
        }
    }

    private taggedSource(tag: string) {
        return this.db
            .list('emoticons', ref => ref.orderByChild('tags/' + tag).equalTo(true))
            .valueChanges() as Observable<Array<Emoticon>>;
    }
}
