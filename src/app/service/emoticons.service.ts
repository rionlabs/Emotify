import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MiniEmoticon} from "../models/MiniEmoticon";
import {Observable} from "rxjs";
import {Emoticon} from "../models/Emoticon";
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
})
export class EmoticonsService {

    private readonly _staticEmoticons: Observable<Array<MiniEmoticon>>;

    constructor(private http: HttpClient, private db: AngularFireDatabase) {
        this._staticEmoticons = this.http.get("assets/static.json") as Observable<Array<MiniEmoticon>>;
    }

    getTags(): Observable<any> {
        return this.db.list('metadata/tagCount',
            ref => ref.orderByKey())
            .snapshotChanges();
    }

    getStaticEmoticons(): Observable<Array<MiniEmoticon>> {
        return this._staticEmoticons;
    }

    getPopularEmoticons(): Observable<Array<Emoticon>> {
        return this.db.list('emoticons',
            ref => ref.orderByChild('useCounter').limitToLast(50))
            .valueChanges() as Observable<Array<Emoticon>>;
    }

    getTaggedEmoticons(tag: string): Observable<Array<Emoticon>> {
        return this.db.list('emoticons', ref => ref.orderByChild('tags/' + tag).equalTo(true))
            .valueChanges() as Observable<Array<Emoticon>>
    }

    increaseUserCounter(emoticon: Emoticon) {
        let newCounter = emoticon.useCounter + 1;
        let path = 'emoticons/' + emoticon.hash + '/useCounter';
        this.db.object(path).set(newCounter)
            .catch(err => console.log(err, 'Error!'));
    }
}
