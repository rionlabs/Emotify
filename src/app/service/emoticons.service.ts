import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MiniEmoticon} from "../models/MiniEmoticon";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmoticonsService {

    private readonly _staticEmoticons: Observable<Array<MiniEmoticon>>;

    constructor(private http: HttpClient) {
        this._staticEmoticons = this.http.get("assets/static.json") as Observable<Array<MiniEmoticon>>;
    }

    getStaticEmoticons(): Observable<Array<MiniEmoticon>> {
        return this._staticEmoticons;
    }
}
